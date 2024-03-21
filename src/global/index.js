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
    margin: 0;
    margin-top: 120px;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: #8075FF;
    @media (max-width: 600px) {
        font-size: 3.5rem;
    }
    @media (max-width: 500px) {
        font-size: 3rem;
    }
    @media (max-width: 400px) {
        font-size: 2.5rem;
    }
`

export const H3 = styled.h3`
    font-size: 2rem;
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
    color: #8075FF;
`;

export const SubText = styled.span`
    display: block;
    text-align: center;
    color: #6320EE;
    font-size: 1.5rem;
`;