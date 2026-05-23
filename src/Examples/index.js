import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import React, { useEffect, useRef, useState } from 'react';
import { TileWrap, H1, H3, P, Text, SubText } from "../global";
import { useNavigate } from "react-router-dom";
import { wordList } from "./wordList";


const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content: flex-start;
    align-items: center;
    padding: 32px 24px;
    margin: 40px 16px;
    row-gap: 6px;
    background: linear-gradient(135deg, rgba(128, 117, 255, 0.05), rgba(99, 32, 238, 0.02));
    border: 1px solid rgba(128, 117, 255, 0.18);
    border-radius: 18px;
`;

const H4 = styled(H3)`
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0px;
    color: #6320EE;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    margin: 50px 0 0 0;
    border: 2px solid rgba(128, 117, 255, 0.25);
    background: rgba(248, 240, 251, 0.05);
    color: #F8F0FB;
    border-radius: 10px;
    padding: 12px 18px;
    font-size: 1.5rem;
    width: 320px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    &::placeholder {
        color: rgba(248, 240, 251, 0.45);
    }
    &:focus {
        outline: 0;
        border-color: #8075FF;
        background: rgba(248, 240, 251, 0.08);
        box-shadow: 0 0 0 4px rgba(128, 117, 255, 0.18);
    }
    @media (max-width: 500px) {
        width: 240px;
        font-size: 1rem;
        padding: 10px 14px;
    }
`;

const TableText = styled(Text)`
    border-bottom: ${props => props.$last ? "none" : "1px solid #F8F0FB" };
    height: 100%;
    padding: 0;
    font-weight: 400;
    color: #6320EE;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`;


const TableTitle = styled(TableText)`
    font-weight: 600;
    color: #8075FF;
    padding-bottom: 5px;
`;

const LText = styled(TableText)`
    padding-left: 25px;
`;

const LTitle = styled(LText)`
    font-weight: 600;
    color: #8075FF;
    padding-bottom: 5px;
`;

const RText = styled(TableText)`
    padding-right: 25px;
`;

const RTitle = styled(RText)`
    font-weight: 600;
    color: #8075FF;
    padding-bottom: 5px;
`;

const Foot = styled.div`
    margin: 16px 0;
    padding: 12px 28px;
    font-size: 1.25rem;
    color: #8075FF;
    border: 1px solid rgba(128, 117, 255, 0.35);
    border-radius: 999px;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    &:hover {
        cursor: pointer;
        background: rgba(128, 117, 255, 0.12);
        border-color: #8075FF;
        transform: translateY(-2px);
    }
    &:last-child {
        margin-bottom: 40px;
    }
`;

export const Examples = () => {

    const [inputText, setInputText] = useState("");
    const [filteredWordList, setFilteredWordList] = useState(wordList);
    const inputRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredWordList(
            wordList.filter(([english, lang1, lang2]) => (
                english.toLowerCase().includes(inputText.toLowerCase()) || 
                lang1.toLowerCase().includes(inputText.toLowerCase()) ||
                lang2.toLowerCase().includes(inputText.toLowerCase())
            ))
        )
    },[setFilteredWordList, inputText])

    return <TileWrap>
        <H1>Lang Samples</H1>
        <H4>Some common words translated into Lang</H4>
        <Input ref={inputRef} type="text" placeholder="Search for a word" onChange={() => {setInputText(inputRef.current.value)}}/>
        <Grid>
            <LTitle>English</LTitle>
            <TableTitle>Lang</TableTitle>
            <RTitle>Precise Lang</RTitle>
            {
                filteredWordList.map(([english, lang1, lang2], i) => {
                    if(lang1 !== "")
                        return <React.Fragment key={`Fragment-${i}`}>
                            <LText key={`LText-${i}`} $last={i === wordList.length-1}>{english}</LText>
                            <TableText key={`CText-${i}`} $last={i === wordList.length-1}>{lang1}</TableText>
                            <RText key={`RText-${i}`} $last={i === wordList.length-1}>{lang2}</RText>
                        </React.Fragment>
                })
            }
        </Grid>
        <Foot onClick={() => {window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })}}>Return To Top</Foot>
        <Foot onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
        }}>Return To Home</Foot>
    </TileWrap>
};
