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
    padding: 50px 0px;
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
    border: 2px solid transparent;
    padding: 10px;
    font-size: 1.5rem;
    width: 300px;
    &:focus {
        outline: 0;
        border: 2px solid #8075FF;
    }
    @media (max-width: 500px) {
        width: 200px;
        font-size: 1rem;
        padding: 10px;
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
    padding: 0 0 10px 0;
    font-size: 1.25rem;
    color: #8075FF;
    &:hover {
        cursor: pointer;
    }
    &:last-child {
        padding-top: 20px;
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
                english.includes(inputText) || 
                lang1.includes(inputText) ||
                lang2.includes(inputText)
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
