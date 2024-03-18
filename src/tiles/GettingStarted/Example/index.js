import styled from "styled-components";
import { TileWrap, H1, H3, P, Text, SubText } from "../../../global";
import { useEffect, useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";

const ExampleWrap = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
`;

const TextWord = styled(Text)`
    color: ${props => props.$hover ? "#F8F0FB" : "#8075FF"};
    &:hover {
        cursor: default;
    }
`;

const SubTextWord = styled(SubText)`
    display: inline;
    color: ${props => props.$hover ? "#F8F0FB" : "#6320EE"};
    &:hover {
        cursor: default;
    }
`;


export const Example = ({sentence = [], x}) => {

    const [hoverPairs, setHoverPairs] = useState([]);

    const checkHover = (i) => (
        hoverPairs.includes(i)
    );

    const AddHover = (i) => {
        setHoverPairs(prev => 
            prev.includes(i)
                ? prev
                : [...prev, i]
            )
    }

    const RemoveHover = (i) => {
        setHoverPairs(prev => prev.filter((e) => e !== i))
    }

    return <ExampleWrap>
        {
            sentence.map((textArr, y) => (
                y === 0
                    ? <Text key={`text-${x}-${y}`}>
                        {textArr.map((word, z) => (
                            <TextWord $hover={checkHover(z)} onMouseOut={() => RemoveHover(z)} onMouseOver={() => { AddHover(z); console.log(hoverPairs)}} key={`TW-${x}-${y}-${z}`}>{word}</TextWord>
                        ))}
                    </Text>
                    : <SubText key={`subText-${x}-${y}`}>
                        {textArr.map((word, z) => (
                            <SubTextWord $hover={checkHover(z)} onMouseOut={() => RemoveHover(z)} onMouseOver={() => { AddHover(z); console.log(hoverPairs)}} key={`STW-${x}-${y}-${z}`}>{`${word} `}</SubTextWord>
                        ))}
                    </SubText>
    
            ))
        }
    </ExampleWrap>
}