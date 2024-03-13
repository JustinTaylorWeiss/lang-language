import styled from "styled-components";

export const TileWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: flex-start;
`;

export const H1 = styled.h1`
    padding-left: 60px;
    margin: 0;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.05em;
`

export const H3 = styled.h3`
    font-size: 2rem;
    padding-left: 40px;
    margin-bottom: 0;
`;

export const P = styled.p`
    font-size: 2rem;
    width: 80%;
`;

export const Text = styled.span`
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: 5px;
    color: black;
    color: inherit;
`;

export const SubText = styled.span`
    display: block;
    text-align: center;
    color: #2e2e2e;
    color: inherit;
    font-size: 1.5rem;
`;