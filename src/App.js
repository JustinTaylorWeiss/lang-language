import styled from "styled-components";
import { LandingTile } from "./tiles";
import { GettingStartedTile } from "./tiles";

const AppWrap = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

//background-image: linear-gradient(#3c8fde, #8fff63);

const App = () => {
  return (
    <AppWrap>
        <LandingTile/>
        <GettingStartedTile/>
    </AppWrap>
  );
}

export default App;

/*
#8075FF Medium
#6320EE Electric
#211A1D Dark
#F8F0FB Light
#CAD5CA Accent


Mode 2

#2C363F Dark
#E75A7C Accent
#F2F5EA Light
#D6DBD2 offwhite
#BBC7A4 accent2
*/