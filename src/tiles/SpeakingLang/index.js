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

export const SpeakingLangTile = () => {

    return <TileWrap>
        <H1>Speaking Lang</H1>
        <OL>
            <LI>To pronounce words, start by saying the name of the first letter in each word.</LI>
            <Row>
                <Example x={xCount()} sentence={[["I/"], ["I"]]} audio="I"/>
                <Example x={xCount()} sentence={[["a/"], ["a"]]} audio="a"/>
            </Row>
            <LIS>The remaining letters are pronounced the same way they would be in the English word.</LIS>
            <Row>
                <Example x={xCount()} sentence={[["ts"], ["this"]]} audio="teess"/>
                <Example x={xCount()} sentence={[["is"], ["is"]]} audio="ice"/>
                <Example x={xCount()} sentence={[["te"], ["the"]]} audio="teeah"/>
                <Example x={xCount()} sentence={[["la-ng"], ["language"]]} audio="el-ang"/>
            </Row>
            <Example x={xCount()} sentence={[
                ["ts","is","te","la-ng"], 
                ["this","is","the","language"],
            ]} audio="teess ice teeah el-ang"/>
            <LI>When pronouncing the letter names W becomes "dub" and H becomes "hai"</LI>
            <Row>
                <Example x={xCount()} sentence={[["wt"], ["what"]]} audio="dubt"/>
                <Example x={xCount()} sentence={[["hw"], ["how"]]} audio="haiwuh"/>
            </Row>
            <Example x={xCount()} sentence={[
                ["wt?","hw","dd","yu","do","tt"], 
                ["what?","How","did","you","do","that"],
            ]} audio="dubt? haiwuh deed whyoo deoh teet"/>
            <LI>Letter pairs that make one sound at the beginning of a word are pronounced by saying the first letter name followed by the combined sound.</LI>
            <RowS>
                <Example x={xCount()} sentence={[["th"], ["th"]]} audio="teeth"/>
                <Example x={xCount()} sentence={[["sh"], ["sh"]]} audio="esh"/>
                <Example x={xCount()} sentence={[["ch"], ["ch"]]} audio="seech"/>
                <Example x={xCount()} sentence={[["ph"], ["ph"]]} audio="peef"/>
                <Example x={xCount()} sentence={[["wh"], ["wh"]]} audio="dub-wuh"/>
                <Example x={xCount()} sentence={[["kn"], ["kn"]]} audio="kayn"/>
                <Example x={xCount()} sentence={[["gn"], ["gn"]]} audio="gene"/>
            </RowS>
            <Example x={xCount()} sentence={[
                ["yu","sh-ld","ch-er","w/-th","us"], 
                ["you","should","cheer","with","us"],
            ]} audio="whyoo eshld seecheer dubth youse"/>
            <LIS>There is only one way to pronounce a given spelling of a word. There are however, multiple valid spellings and so multiple valid pronunciations. More precise pronunciations should be used if the context won't help clarify similar sounding words.</LIS>
            <Row>
                <Example x={xCount()} sentence={[["fx"], ["fox"]]} audio="efkx"/>
                <Example x={xCount()} sentence={[["fx"], ["fix"]]} audio="efkx"/>
                <Example x={xCount()} sentence={[["fo-x/"], ["fox"]]} audio="ef-ox"/>
                <Example x={xCount()} sentence={[["fi-x/"], ["fix"]]} audio="ef-icks"/>
            </Row>
            <Example x={xCount()} sentence={[
                ["[fx]","ws","fi-x/","nt", "fo-x/"],
                ["fx","was","fix","not","fox"],
            ]} audio="FX dubs ef-icks ent ef-ox"/>
        </OL>
    </TileWrap>
};
