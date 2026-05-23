# TTS audio generator

Pre-generates MP3s for every `audio="..."` prop found under `src/` so the site
plays consistent, high-quality pronunciations instead of relying on the
browser's built-in voice (which varies wildly by OS).

## One-time setup

1. Get an OpenAI API key from https://platform.openai.com/api-keys
2. Set the env var (Windows PowerShell):
   ```powershell
   $env:OPENAI_API_KEY = "sk-..."
   ```

## Generate audio

```powershell
npm run tts
```

The script:
- Scans `src/` for every `audio="..."` prop (deduped)
- Calls OpenAI TTS for each string that doesn't already have an MP3 on disk
- Writes MP3s to `public/audio/<slug>.mp3`
- Writes `src/audioManifest.json` mapping each text to its filename

Re-running is safe — existing files are skipped. Delete an MP3 to force regeneration.

## Committing

Commit both `public/audio/*.mp3` and `src/audioManifest.json` so the deploy
includes the new audio.

## Tuning

Override defaults with env vars:

| Var | Default | Notes |
|---|---|---|
| `TTS_VOICE` | `nova` | `alloy`, `echo`, `fable`, `onyx`, `nova`, `shimmer` |
| `TTS_MODEL` | `tts-1-hd` | `tts-1` is cheaper/faster, `tts-1-hd` is higher quality |
| `TTS_SPEED` | `0.9` | 0.25 – 4.0 |

## Cost

`tts-1-hd` is $0.030 / 1K characters. The current example set is well under
1K characters, so a full regeneration costs a few cents.

## Runtime fallback

If `audioManifest.json` has no entry for a given string (e.g. you added a new
example but haven't run `npm run tts` yet), the `Example` component falls back
to the browser's `SpeechSynthesisUtterance` automatically.
