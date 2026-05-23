import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TileWrap, H1, H3, P, Text, SubText } from "../../global";
import { Example } from "../../global/Example";


const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    @media (max-width: 600px) {
        gap: 50px;
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
`;

const PFill = styled(P)`
    width: 55%;
    text-align: justify;
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

const LISubText = styled(SubText)`
    padding-top: 10px;
    color: #F8F0FB;
`;

const DiscordWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
`;

const IFrame = styled.iframe`
    background-color: transparent;
    border-radius: 14px;
    box-shadow: 0 12px 40px rgba(99, 32, 238, 0.25);
    outline: 1px solid rgba(128, 117, 255, 0.2);
    @media (max-width: 400px) {
        width: 100%
    }
`;

function* xCount() {
    let count = 0;
    while (true) {
      yield ++count;
    }
}

export const Community = () => {

    return <TileWrap>
        <H1 id="communityHeader">Community</H1>
        <H4>Join the Lang language Discord server!</H4>
        <DiscordWrap>
            <IFrame src="https://discord.com/widget?id=1217362796212125776&theme=dark" width="350" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
        </DiscordWrap>
    </TileWrap>
};
