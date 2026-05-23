import styled from "styled-components";
import { Home } from "./tiles";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./global/Nav";
// import { Donate } from "./global/Donate";
import { Examples } from "./Examples";

const AppWrap = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = () => {

    return <BrowserRouter>
        <AppWrap>
            {/* <Donate/> */}
            <Nav/>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/examples"} element={<Examples/>}/>
                <Route path = "*" element={<Navigate to="/"/>}/>
            </Routes>
        </AppWrap>
    </BrowserRouter>;
}

export default App;

/*
#8075FF Medium
#6320EE Electric
#211A1D Dark
#F8F0FB Light
#CAD5CA Accent
*/