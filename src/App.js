import styled from "styled-components";
import { Home } from "./tiles";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./global/Nav";

const AppWrap = styled.div`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const App = () => {

    return <BrowserRouter>
        <AppWrap>
            <Nav/>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/examples"} element={<div>Hello World</div>}/>
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