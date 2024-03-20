

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

const RowS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
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

const LIS = styled(LI)`
    font-size: 1.5rem;
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

export const Tips = () => {

    return <TileWrap>
        <H1>Tips For Using Lang</H1>
        <UL>
            <LI>Letters Pairs that make one sound can be grouped to make words easier to read</LI>
            <LISubText>th, sh, ch, wh, ph, kn, gn, gh</LISubText>
            <Example x={xCount()} sentence={[
                ["A/-sh","is","ea-sy","to", "rd", "wh-n/", "yu", "gr-p/", "it", "ts", "wy"],
                ["Ash","is","easy","to", "read", "when", "you", "group", "it", "this", "way"],
            ]}/>
        </UL>
    </TileWrap>
};