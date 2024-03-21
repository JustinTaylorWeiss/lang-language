import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, P } from "../../global";
import sound from "./assets/sound.png";
import { useState } from "react";

const CTA = styled.div`
    margin: 120px 0px 0px 0px;
    text-align: center;
    font-size: 2.2rem;
    line-height: 3rem;
    &:hover {
        cursor: url(${sound}) 20 20,
        pointer;
    }
    @media (max-width: 700px) {
        font-size: 1.75rem;
    }
    @media (max-width: 550px) {
        font-size: 1.5rem;
    }
    @media (max-width: 450px) {
        font-size: 1.25rem;
        line-height: 2rem;
    }
    @media (max-width: 350px) {
        font-size: 1rem;
    }
`;

export const LandingTile = () => {

    const [speaking, setSpeaking] = useState(false);

    const speak = () => {
        if(!speaking) {
            setSpeaking(true);
            const utterance = new SpeechSynthesisUtterance("el-ang ice eighn e-glish peace-ood-oh el-ang. Teece el-ang seendnses e-glish aid haice only effvuh arels tee-yo el-earn");
            utterance.onend = () => {setSpeaking(false)}
            window.speechSynthesis.speak(utterance);
        }
    };

    return <TileWrap> 
        <CTA onClick={speak}>
            Lang is an English pseudo language.<br/>
            This language condenses english<br/>
            and has only 5 rules to learn.
        </CTA>
    </TileWrap>
};