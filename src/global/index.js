import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const TileWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: flex-start;
    padding: 24px 0 56px 0;
    animation: ${fadeUp} 0.6s ease-out both;
`;

export const H1 = styled.h1`
    position: relative;
    margin: 96px 0 8px 0;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-align: center;
    background: linear-gradient(135deg, #8075FF 0%, #6320EE 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;

    &::after {
        content: '';
        display: block;
        width: 64px;
        height: 3px;
        margin: 16px auto 0;
        background: linear-gradient(90deg, #8075FF, #6320EE);
        border-radius: 2px;
    }

    @media (max-width: 600px) {
        font-size: 3.5rem;
        margin-top: 72px;
    }
    @media (max-width: 500px) {
        font-size: 3rem;
    }
    @media (max-width: 400px) {
        font-size: 2.5rem;
    }
`;

export const H3 = styled.h3`
    font-size: 2rem;
    margin-bottom: 0;
    letter-spacing: 0.02em;
`;

export const P = styled.p`
    font-size: 2rem;
    width: 80%;
    line-height: 1.5;
`;

export const Text = styled.span`
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 5px;
    color: #8075FF;
    letter-spacing: 0.02em;
`;

export const SubText = styled.span`
    display: block;
    text-align: center;
    color: #9B8BF2;
    font-size: 1.5rem;
`;
