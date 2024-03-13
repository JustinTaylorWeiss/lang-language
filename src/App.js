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
    border: 4px solid black;
    border-top: none;
    border-bottom: none;
    backdrop-filter: brightness(140%);
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
