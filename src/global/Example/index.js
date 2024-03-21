import styled from "styled-components";
import { TileWrap, H1, H3, P, Text, SubText } from "../index";
import { useEffect, useState } from "react";
import sound from './assets/sound.png';

const ExampleWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
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
    const [utterance, setUtterance] = useState("");

    useEffect(() => {
        if(utterance !== "") {
            const speach = new SpeechSynthesisUtterance(utterance);
            speach.onend = () => {setUtterance("");}
            window.speechSynthesis.speak(speach);
        }
    },[utterance])

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
        if(audio !== "")
            setUtterance(audio)
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