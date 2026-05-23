import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";
import { TileWrap, H1, H3, P, Text, SubText } from "../../global";
import { Example } from "../../global/Example";


const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 28px;
    margin: 8px 0;
    @media (max-width: 600px) {
        gap: 18px;
    }
    @media (max-width: 350px) {
        gap: 12px;
    }
`;

const RowS = styled(Row)`
    gap: 14px;
    @media (max-width: 600px) {
        gap: 12px;
    }
    @media (max-width: 350px) {
        gap: 8px;
    }
`;

const H4 = styled(H3)`
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 0px;
    color: #9B8BF2;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

const UL = styled.ul`
    padding-top: 20px;
    width: 75%;
    font-size: 1.65rem;
`;

const OL = styled.ol`
    padding-top: 20px;
    margin-bottom: 0;
    padding-left: 0;
    width: 75%;
    font-size: 1.65rem;
    list-style: none;
    counter-reset: srules 5;
    @media (max-width: 800px) {
        width: 88%;
    }
`;

const PFill = styled(P)`
    width: 55%;
    text-align: justify;
`;

const LI = styled.li`
    position: relative;
    counter-increment: srules;
    text-align: justify;
    padding: 24px 28px 24px 80px;
    background: linear-gradient(135deg, rgba(128, 117, 255, 0.06), rgba(99, 32, 238, 0.02));
    border: 1px solid rgba(128, 117, 255, 0.15);
    border-left: 3px solid #8075FF;
    border-radius: 14px;
    margin: 72px 0 28px 0;

    &::before {
        content: counter(srules);
        position: absolute;
        left: 20px;
        top: 22px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        font-weight: 700;
        color: #F8F0FB;
        background: linear-gradient(135deg, #8075FF, #6320EE);
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(99, 32, 238, 0.35);
    }

    @media (max-width: 1300px) {
        text-align: left;
    }
    @media (max-width: 600px) {
        font-size: 1.5rem;
        padding: 20px 20px 20px 72px;
    }
    @media (max-width: 400px) {
        font-size: 1.25rem;
        padding: 18px 16px 18px 64px;
        &::before {
            width: 34px;
            height: 34px;
            left: 16px;
            top: 18px;
            font-size: 1rem;
        }
    }
`;

const LIS = styled.li`
    list-style: none;
    counter-increment: none;
    text-align: left;
    font-style: italic;
    font-size: 1.15rem;
    color: rgba(248, 240, 251, 0.7);
    padding: 10px 18px 10px 20px;
    margin: 32px 24px 40px;
    background: transparent;
    border: 0;
    border-left: 2px dashed rgba(128, 117, 255, 0.45);
    border-radius: 0;

    &::before {
        content: 'Hint';
        display: inline-block;
        font-style: normal;
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(128, 117, 255, 0.95);
        margin-right: 10px;
        padding: 2px 8px;
        border: 1px solid rgba(128, 117, 255, 0.45);
        border-radius: 999px;
        vertical-align: 2px;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
        margin: 8px 8px 24px;
    }
    @media (max-width: 400px) {
        font-size: 0.95rem;
    }
`;

const LISubText = styled(SubText)`
    padding-top: 10px;
    color: #F8F0FB;
`;

const ExamplesWrap = styled.div`
    text-align: center;
    margin: 64px 20px 24px;
    padding: 26px 56px 22px;
    border-radius: 18px;
    border: 1px solid rgba(128, 117, 255, 0.25);
    background: linear-gradient(135deg, rgba(128, 117, 255, 0.07), rgba(99, 32, 238, 0.03));
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

    & h1 {
        margin: 0;
        padding: 4px 0;
        font-size: 2.25rem;
        @media (max-width: 600px) {
            font-size: 1.85rem;
        }
        @media (max-width: 400px) {
            font-size: 1.5rem;
        }
        &::after {
            display: none;
        }
    }

    & h3 {
        font-size: 1.1rem;
        margin-top: 6px;
        letter-spacing: 0.02em;
        @media (max-width: 500px) {
            font-size: 0.95rem;
        }
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
        border-color: rgba(128, 117, 255, 0.5);
        background: linear-gradient(135deg, rgba(128, 117, 255, 0.12), rgba(99, 32, 238, 0.06));
        box-shadow: 0 14px 36px rgba(99, 32, 238, 0.25);
    }

    @media (max-width: 600px) {
        padding: 22px 36px 20px;
    }
`;

function* xCount() {
    let count = 0;
    while (true) {
      yield ++count;
    }
}

export const SpeakingLangTile = () => {

    const navigate = useNavigate();

    const onExamplesClick = () => {
        window.scrollTo(0, 0);
        navigate("/examples");
    }

    return <TileWrap>
        <H1>Speaking Lang</H1>
        <H4>click on examples to hear them</H4>
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
        <ExamplesWrap onClick={onExamplesClick}>
            <H1>More Examples</H1>
            <H4>Click here for a table of common words</H4>
        </ExamplesWrap>
    </TileWrap>
};
