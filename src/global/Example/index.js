import styled from "styled-components";
import { TileWrap, H1, H3, P, Text, SubText } from "../index";
import { useRef, useState } from "react";
import sound from './assets/sound.png';
import audioManifest from '../../audioManifest.json';

const AUDIO_BASE = `${process.env.PUBLIC_URL || ''}/audio`;

const speakFallback = (text) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

const ExampleWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-width: 96px;
    margin: 12px 4px;
    padding: 16px 20px;
    border-radius: 14px;
    background: linear-gradient(135deg, rgba(128, 117, 255, 0.04), rgba(99, 32, 238, 0.02));
    border: 1px solid rgba(128, 117, 255, 0.12);
    transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
    &:hover {
        border-color: rgba(128, 117, 255, 0.35);
        background: linear-gradient(135deg, rgba(128, 117, 255, 0.08), rgba(99, 32, 238, 0.04));
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(99, 32, 238, 0.15);
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const ExampleText = styled(Text)`
     &:hover {
        cursor: url(${sound}) 20 20,
        pointer
    }
`;

const ExampleSubText = styled(SubText)`
    &:hover {
        cursor: url(${sound}) 20 20,
        pointer
    }
`;


const TextWord = styled(Text)`
    color: ${props => props.$hover ? "#F8F0FB" : "#8075FF"};
    transition: 0.2s linear;
    &:hover {
        cursor: ${props => props.$audio ? "inherit" : "default"};
    }
    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
    @media (max-width: 400px) {
        font-size: 1.25rem;
    }
`;

const SubTextWord = styled(SubText)`
    display: inline;
    color: ${props => props.$hover ? "#F8F0FB" : "#6320EE"};
    transition: 0.2s linear;
    &:hover {
        cursor: ${props => props.$audio ? "inherit" : "default"};
    }
    @media (max-width: 700px) {
        font-size: 1.25rem;
    }
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

const Img = styled.img`
    padding-left: 10px;
    width: 25px;
    &:hover {
        cursor: pointer;
    }
`;


export const Example = ({sentence = [], audio = "", x}) => {

    const [hoverPairs, setHoverPairs] = useState([]);
    const audioRef = useRef(null);

    const checkHover = (i) => (
        hoverPairs.includes(i)
    );

    const addHover = (i) => () => {
        setHoverPairs(prev =>
            prev.includes(i)
                ? prev
                : [...prev, i]
            )
    }

    const removeHover = (i) => () => {
        setHoverPairs(prev => prev.filter((e) => e !== i))
    }

    const exampleClick = () => {
        if (audio === "") return;
        const file = audioManifest[audio];
        if (!file) {
            speakFallback(audio);
            return;
        }
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        const el = new Audio(`${AUDIO_BASE}/${file}`);
        audioRef.current = el;
        el.play().catch(() => speakFallback(audio));
    };

    const speach = sentence[2] ?? "";

    return <ExampleWrap>
        <Column>
            {
                sentence.map((textArr, y) => (
                    y === 0
                        ? <ExampleText onClick={exampleClick} key={`text-${x}-${y}`}>
                            {textArr.map((word, z) => (
                                <TextWord $audio={audio !== ""} $hover={checkHover(z)} onMouseOut={removeHover(z)} onMouseOver={addHover(z)} key={`TW-${x}-${y}-${z}`}>{word}</TextWord>
                            ))}
                        </ExampleText>
                        : <ExampleSubText onClick={exampleClick} key={`subText-${x}-${y}`}>
                            {textArr.map((word, z) => (
                                <SubTextWord $audio={audio !== ""} $hover={checkHover(z)} onMouseOut={removeHover(z)} onMouseOver={addHover(z)} key={`STW-${x}-${y}-${z}`}>{`${word} `}</SubTextWord>
                            ))}
                        </ExampleSubText>
        
                ))
            }
        </Column>
    </ExampleWrap>
}