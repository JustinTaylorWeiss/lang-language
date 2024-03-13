import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { Nav } from "./Nav";
import { TileWrap, H1, P } from "../../global";

const CTA = styled.div`
    padding: 120px 0px;
    text-align: center;
    font-size: 2.2rem;
    line-height: 3rem;
`;

export const LandingTile = () => {

    return <TileWrap>
        <Nav/>
        <CTA>
            Lang is an english pseudo language<br/>
            There are only 5 rules to write in Lang
        </CTA>
    </TileWrap>
};