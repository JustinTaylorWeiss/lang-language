import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, H3, P, Text, SubText } from "../../global";
import { Example } from "./Example";

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
    color: #F8F0FB;
`;

function* xCount() {
    let count = 0;
    while (true) {
      yield ++count;
    }
}

export const GettingStartedTile = () => {

    return <TileWrap>
        <H1>Geting Started</H1>
        <OL>
            <LI>Lang uses no spasces, Words are composed of groups of two letters.</LI>
            <Example x={xCount()} sentence={[
                ["Hi","hw","ar","yu?"],
                ["Hi","how","are","you?"],
            ]}/>
            <LI>If a word requires more than one group of letters you use a - to extend the word.</LI>
            <Example x={xCount()} sentence={[
                ["He-lo","hw","ar","yu?"],
                ["Hello,","how","are","you?"],
            ]}/>
            <LI>Letters are always in groups of two, to write a single letter use a / to fill the gap.</LI>
            <Example x={xCount()} sentence={[
                ["I/","th-k/","it","wl", "ra-in"],
                ["I","think","it","will","rain"],
            ]}/>
            <LI>Proper nouns and characters can be written with square brackets around them [].</LI>
            <Example x={xCount()} sentence={[
                ["Hi","my","nm","is", "[Justin]"],
                ["Hi","my","name","is","Justin"],
            ]}/>
            <LI>Words can have multiple valid spellings, be as specific as you need to be.</LI>
            <Example x={xCount()} sentence={[
                ["[fx]","ws","fi-x/","nt", "fo-x/"],
                ["fx","was","fix","not","fox"],
            ]}/>
        </OL>
        <H1>Tips For Writing Lang</H1>
        <UL>
            <LI>Letters Pairs that make one sound can be grouped to make words easier to read</LI>
            <LISubText>th, sh, ch, wh, ph, kn, gn, gh</LISubText>
            <Example x={xCount()} sentence={[
                ["A/-sh","is","ea-sy","to", "rd", "wh-n/", "yu", "gr-p/", "it", "ts", "wy"],
                ["Ash","is","easy","to", "read", "when", "you", "group/", "it", "this", "way"],
            ]}/>
        </UL>
    </TileWrap>
};
