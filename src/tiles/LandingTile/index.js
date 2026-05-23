import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, P } from "../../global";
import sound from "./assets/sound.png";
import { useState } from "react";

const AUDIO_BASE = `${process.env.PUBLIC_URL || ''}/audio`;
const INTRO_TEXT = "el-ang ice eighn e-glish peace-ood-oh el-ang. Teece el-ang seendnses e-glish aid haice only ayt arels tee-yo el-earn";

const speakIntroFallback = (onDone) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
        onDone();
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(INTRO_TEXT);
    utterance.onend = onDone;
    window.speechSynthesis.speak(utterance);
};

const CTA = styled.div`
    position: relative;
    margin: 120px 20px 40px 20px;
    padding: 48px 56px;
    text-align: center;
    font-size: 2.2rem;
    line-height: 3rem;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(128, 117, 255, 0.08), rgba(99, 32, 238, 0.03));
    border: 1px solid rgba(128, 117, 255, 0.18);
    transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 20%;
        right: 20%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #8075FF, transparent);
    }

    &:hover {
        cursor: url(${sound}) 20 20,
        pointer;
        transform: translateY(-4px);
        border-color: rgba(128, 117, 255, 0.45);
        box-shadow: 0 16px 48px rgba(99, 32, 238, 0.22);
    }

    @media (max-width: 700px) {
        font-size: 1.75rem;
        padding: 36px 36px;
    }
    @media (max-width: 550px) {
        font-size: 1.5rem;
        padding: 32px 28px;
    }
    @media (max-width: 450px) {
        font-size: 1.25rem;
        line-height: 2rem;
        padding: 24px 20px;
    }
    @media (max-width: 350px) {
        font-size: 1rem;
    }
`;

export const LandingTile = () => {

    const [speaking, setSpeaking] = useState(false);

    const speak = () => {
        if (speaking) return;
        setSpeaking(true);
        const done = () => setSpeaking(false);
        const part1 = new Audio(`${AUDIO_BASE}/main1.mp3`);
        const part2 = new Audio(`${AUDIO_BASE}/main2.mp3`);
        part1.onended = () => { part2.play().catch(() => speakIntroFallback(done)); };
        part2.onended = done;
        part1.play().catch(() => speakIntroFallback(done));
    };

    return <TileWrap> 
        <CTA onClick={speak}>
            Lang is an English pseudo language.<br/>
            This language condenses english<br/>
            and has only 8 rules to learn.
        </CTA>
    </TileWrap>
};