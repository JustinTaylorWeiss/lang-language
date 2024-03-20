import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, P } from "../../global";
import sound from "./assets/sound.png";
import { useState } from "react";

const CTA = styled.div`
    margin: 120px 0px;
    text-align: center;
    font-size: 2.2rem;
    line-height: 3rem;
    &:hover {
        cursor: url(${sound}) 20 20,
        pointer;
    }
`;

const CTA2 = styled(CTA)`
    margin: 0px;
    &:hover {
        cursor: default;
    }
`;

export const LandingTile = () => {

    const [speaking, setSpeaking] = useState(false);

    const speak = () => {
        if(!speaking) {
            setSpeaking(true);
            const utterance = new SpeechSynthesisUtterance("el-ang ice eighn e-glish peace-ood-oh el-ang. Teece el-ang seendnses e-glish aid ice esspr e-sea tee-yo el-earn");
            utterance.onend = () => {setSpeaking(false)}
            window.speechSynthesis.speak(utterance);
        }
    };

    return <TileWrap> 
        <CTA onClick={speak}>
            Lang is an English pseudo language.<br/>
            This language condenses english<br/>
            and is super easy to learn.
        </CTA>
        <CTA2>
            There are only 5 rules to reading / writing in Lang
        </CTA2>
    </TileWrap>
};