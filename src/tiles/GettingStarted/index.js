import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, H3, P, Text, SubText } from "../../global";
import { Example } from "../../global/Example";


const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

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
    text-align: justify;
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
        <H1>Getting Started</H1>
        <OL>
            <LI>Words are composed of groups of two letters. Lang does not use spaces.</LI>
            <Row>
                <Example x={xCount()} sentence={[["hi"], ["hi"]]}/>
                <Example x={xCount()} sentence={[["hw"], ["how"]]}/>
                <Example x={xCount()} sentence={[["ar"], ["are"]]}/>
                <Example x={xCount()} sentence={[["yu"], ["you"]]}/>
            </Row>
            <Example x={xCount()} sentence={[
                ["Hi","hw","ar","yu?"],
                ["Hi","how","are","you?"],
            ]}/>
            <LI>If a word requires more than one group of letters you use a - to extend the word.</LI>
            <Row>
                <Example x={xCount()} sentence={[["he-lo"], ["hello"]]}/>
                <Example x={xCount()} sentence={[["to-dy"], ["today"]]}/>
            </Row>
            <Example x={xCount()} sentence={[
                ["He-lo","hw","ar","yu","to-dy?"],
                ["Hello,","how","are","you","today?"],
            ]}/>
            <LI>Letters are always in groups of two, to write a single letter use a / to fill the gap.</LI>
            <Row>
                <Example x={xCount()} sentence={[["I/"], ["I"]]}/>
                <Example x={xCount()} sentence={[["t/-nk"], ["think"]]}/>
            </Row>
            <Example x={xCount()} sentence={[
                ["I/","t/-nk","it","wl", "ra-in"],
                ["I","think","it","will","rain"],
            ]}/>
            <LI>Proper nouns and characters can be written with square brackets around them [].</LI>
            <Row>
                <Example x={xCount()} sentence={[["[Mike]"], ["Mike"]]}/>
                <Example x={xCount()} sentence={[["[AB]"], ["AB"]]}/>
            </Row>
            <Example x={xCount()} sentence={[
                ["[Mike's]","bl-d/","ty-p/","is","[AB]"],
                ["Mike's","blood","type","is","AB"],
            ]}/>
            <LI>Words can have multiple spellings, be as precise as you need to be. When there are similar spellings the context will usually indicate what the intended word is. If you are writing and the context is ambiguous, use a more precise spelling.</LI>
            <Row>
                <Example x={xCount()} sentence={[["fx"], ["fox"]]}/>
                <Example x={xCount()} sentence={[["fx"], ["fix"]]}/>
                <Example x={xCount()} sentence={[["fo-x/"], ["fox"]]}/>
                <Example x={xCount()} sentence={[["fi-x/"], ["fix"]]}/>
            </Row>
            <Example x={xCount()} sentence={[
                ["[fx]","ws","fi-x/","nt", "fo-x/"],
                ["fx","was","fix","not","fox"],
            ]}/>
        </OL>
    </TileWrap>
};
