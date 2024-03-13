import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, H3, P, Text, SubText } from "../../global";

const UL = styled.ul`
    padding-top: 20px;
    width: 75%;
    font-size: 1.65rem;
`;

const OL = styled.ol`
    padding-top: 20px;
    margin-bottom: 0;
    width: 75%;
    font-size: 1.65rem;
`;

const PFill = styled(P)`
    width: 55%;
    text-align: justify;
    text-align-last: justify;
`;

const LI = styled.li`
    text-align-last: justify;
`;

const LISubText = styled(SubText)`
    padding-top: 10px;
`;

const Example = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 0;
`;

export const GettingStartedTile = () => {

    return <TileWrap>
        <H1>Geting Started</H1>
        <OL>
            <LI>Lang uses no spaces, Words are composed of groups of two letters.</LI>
            <Example>
                <Text>Hihwaryu?</Text>
                <SubText>Hi, how are you?</SubText>
            </Example>
            <LI>If a word requires more than one group of letters you use a - to extend the word.</LI>
            <Example>
                <Text>He-lohwaryu?</Text>
                <SubText>Hello, how are you?</SubText>
            </Example>
            <LI>Letters are always in groups of two, to write a single letter use a / to fill the gap.</LI>
            <Example>
                <Text>I/th-k/itwlra-in</Text>
                <SubText>I think it will rain</SubText>
            </Example>
            <LI>Proper nouns and characters can be written with square brackets around them [].</LI>
            <Example>
                <Text>Himynmis[Justin]</Text>
                <SubText>Hi my name is Justin</SubText>
            </Example>
            <LI>Words can have multiple valid spellings, be as specific as you need to be.</LI>
            <Example>
                <Text>[fx]wsfi-x/ntfo-x/</Text>
                <SubText>fx was fix not fox</SubText>
            </Example>
        </OL>
        <H1>Tips For Writing Lang</H1>
        <UL>
            <LI>Letters Pairs that make one sound can be grouped to make words easier to read</LI>
            <LISubText>th, sh, ch, wh, ph, kn, gn, gh</LISubText>
            <Example>
                <Text>A/-shisea-sytordwh-n/yugr-p/ittswy</Text>
                <SubText>Ash is easy to read when you group it this way</SubText>
            </Example>
        </UL>
    </TileWrap>
};