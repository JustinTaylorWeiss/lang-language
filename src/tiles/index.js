import { LandingTile } from "./LandingTile";
import { GettingStartedTile } from "./GettingStarted";
import { SpeakingLangTile } from "./SpeakingLang";
import styled from "styled-components";

const Foot = styled.div`
    margin: 40px 0 20px 0;
    padding: 12px 28px;
    font-size: 1.25rem;
    color: #8075FF;
    border: 1px solid rgba(128, 117, 255, 0.35);
    border-radius: 999px;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    &:hover {
        cursor: pointer;
        background: rgba(128, 117, 255, 0.12);
        border-color: #8075FF;
        transform: translateY(-2px);
    }
`;

export const Home = () => <>
    <LandingTile/>
    <GettingStartedTile/>
    <SpeakingLangTile/>
    <Foot onClick={() => {window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })}}>Return To Top</Foot>
</>
