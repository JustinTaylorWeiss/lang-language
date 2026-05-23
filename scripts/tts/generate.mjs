#!/usr/bin/env node
// Generates MP3s for every `audio="..."` prop found under src/ using OpenAI TTS.
// Output: public/audio/<slug>.mp3 + src/audioManifest.json (text -> filename).
// Re-running is safe: files already on disk are skipped.

import { readFile, writeFile, mkdir, access, readdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "..");
const SRC_DIR = resolve(ROOT, "src");
const AUDIO_DIR = resolve(ROOT, "public", "audio");
const MANIFEST_PATH = resolve(ROOT, "src", "audioManifest.json");

const VOICE = process.env.TTS_VOICE || "nova";
const MODEL = process.env.TTS_MODEL || "tts-1-hd";
const SPEED = Number(process.env.TTS_SPEED || "0.9");

const slug = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80) || "audio";

const fileExists = async (p) => {
    try {
        await access(p);
        return true;
    } catch {
        return false;
    }
};

async function findAudioStrings(dir) {
    const found = new Set();
    const walk = async (d) => {
        const entries = await readdir(d, { withFileTypes: true });
        for (const e of entries) {
            if (e.name.startsWith(".") || e.name === "node_modules") continue;
            const p = resolve(d, e.name);
            if (e.isDirectory()) {
                await walk(p);
            } else if (/\.(jsx?|tsx?)$/.test(e.name)) {
                const content = await readFile(p, "utf8");
                for (const m of content.matchAll(/\baudio\s*=\s*"([^"]+)"/g)) {
                    const v = m[1].trim();
                    if (v) found.add(v);
                }
            }
        }
    };
    await walk(dir);
    return [...found].sort();
}

async function synthesize(text, apiKey) {
    const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: MODEL,
            voice: VOICE,
            input: text,
            speed: SPEED,
            response_format: "mp3",
        }),
    });
    if (!res.ok) {
        throw new Error(`OpenAI TTS ${res.status}: ${await res.text()}`);
    }
    return Buffer.from(await res.arrayBuffer());
}

async function main() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error("OPENAI_API_KEY env var is required.");
        process.exit(1);
    }

    await mkdir(AUDIO_DIR, { recursive: true });

    const strings = await findAudioStrings(SRC_DIR);
    if (strings.length === 0) {
        console.log("No audio strings found in src/. Nothing to do.");
        return;
    }

    console.log(`Found ${strings.length} unique audio strings.`);
    console.log(`Voice=${VOICE} model=${MODEL} speed=${SPEED}\n`);

    const manifest = {};
    let generated = 0;
    let skipped = 0;

    for (const text of strings) {
        const filename = `${slug(text)}.mp3`;
        manifest[text] = filename;
        const target = resolve(AUDIO_DIR, filename);

        if (await fileExists(target)) {
            skipped++;
            continue;
        }

        process.stdout.write(`  generating "${text}" -> ${filename} ... `);
        const buf = await synthesize(text, apiKey);
        await writeFile(target, buf);
        generated++;
        console.log("ok");
    }

    await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

    console.log(`\nDone. Generated ${generated}, skipped ${skipped} (already on disk).`);
    console.log(`Audio:    ${AUDIO_DIR}`);
    console.log(`Manifest: ${MANIFEST_PATH}`);
    console.log(`Commit both so the deploy includes the new audio.`);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
