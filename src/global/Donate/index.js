import styled from "styled-components";
import { Fragment, useEffect, useState } from "react";
import donateIMG from "./assets/donate.png";
import donateScribble from "./assets/donateScribble.gif";

const DonateButton = styled.button`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 18px;
    top: 12vh;
    border: 0;
    padding: 0;
    width: 5vw;
    height: 5vw;
    min-height: 50px;
    min-width: 50px;
    max-width: 100px;
    max-height: 100px;
    border-radius: 14px;
    background-color: #13C3FF;
    box-shadow: 0 6px 20px rgba(19, 195, 255, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    z-index: 5;
    &:hover {
        cursor: pointer;
        transform: scale(1.08);
        box-shadow: 0 8px 28px rgba(19, 195, 255, 0.55);
    };
`;

const DonateIMG = styled.img`
    margin: 0;
    width: ${props => props.$hover ? "5vw" : "4vw"};
    min-width: ${props => props.$hover ? "50px" : "40px"};
    max-width: ${props => props.$hover ? "100px" : "80px"};
    padding: 0;
    border-radius: 5px;
`;

export const Donate = () => {

    const [donateHover, setDonateHover] = useState(false);

    return <DonateButton onMouseOver={()=> {setDonateHover(true)}} onMouseOut={()=> {setDonateHover(false)}} onClick={() => window.open("https://ko-fi.com/justintaylorweiss", "_blank") }>
        <DonateIMG $hover={donateHover} src={donateHover ? donateScribble : donateIMG}/>
    </DonateButton>
}