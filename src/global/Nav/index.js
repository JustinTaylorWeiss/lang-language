import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const NavWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1100px) {
        justify-content: center;
    }
`;

const LogoWrap = styled.div`
    padding: 30px 0 20px 60px;
    &:hover{
        cursor: pointer;
    }
    @media (max-width: 1100px) {
        padding-left: 0;
    }
`;

const LogoText = styled.h1`
    letter-spacing: 0.05em;
    font-weight: 700;
    margin: 0;
    padding: 4px 0 2px 0;
    font-size: 2.5rem;
    line-height: 1.2;
    background: linear-gradient(135deg, #8075FF 0%, #6320EE 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    @media (max-width: 400px) {
        font-size: 2rem;
    }
`;

const SubLogoText = styled.div`
    letter-spacing: 0.05em;
    font-weight: 400;
    display: block;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.6rem;
    color: #9B8BF2;
    margin-top: 4px;
    @media (max-width: 400px) {
        font-size: 1rem;
    }
`;

const NavTextWrap = styled.div`
    padding-right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    position: relative;
    display: block;
    padding: 4px 0;
    margin-right: 28px;
    z-index: 2;
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        height: 2px;
        background: linear-gradient(90deg, #8075FF, #6320EE);
        border-radius: 2px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.3s ease;
    }
    &:hover {
        color: #8075FF;
        cursor: pointer;
    }
    &:hover::after {
        transform: scaleX(1);
    }
    &:last-child {
        margin-right: 0;
    }
`;

const LinkText = styled.span`
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1rem;
    color: ${props => props.$hover ? "#F8F0FB" : "#8075FF"};
    transition: 0.2s linear;
`;

const LinkSubText = styled.span`
    display: block;
    text-align: center;
    font-size: 0.75rem;
    color: ${props => props.$hover ? "#F8F0FB" : "#9B8BF2"};
    transition: 0.2s linear;
`;

export const Nav = () => {

    const [hoveredNavs, setHoveredNavs] = useState([]);
    const navigate = useNavigate();

    const checkHover = (i) => (
        hoveredNavs.includes(i)
    );

    const addHover = (i) => () => {
        setHoveredNavs(prev =>
            prev.includes(i)
                ? prev
                : [...prev, i]
            )
    }

    const removeHover = (i) => () => {
        setHoveredNavs(prev => prev.filter((e) => e !== i))
    }

    const onLinkClick = (i) => () => {
        if(i === 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            navigate("/");
        }
        else if(i === 1) {
            navigate("/examples");
        }
        else {
            navigate("/");
        }
    }

    return <NavWrap>
        <LogoWrap onClick={onLinkClick(0)}>
            <LogoText>
                [Lang]La-ng.com
            </LogoText>
            <SubLogoText>
                LangLanguage.com
            </SubLogoText>
        </LogoWrap>
        {
            !useMediaQuery({ query:'(max-width: 1100px)'}) && <NavTextWrap>
                {
                    [
                        ["hm", "Home"],
                        ["mo-r/ex-mp-ls",  "More Examples" ]
                    ].map(([langText, englishText], i) => (
                        <Link key={`navLink-${i}`} onClick={onLinkClick(i)} onMouseOver={addHover(i)}  onMouseOut={removeHover(i)}>
                            <LinkText key={`navLinkText-${i}`} $hover={checkHover(i)}>{langText}</LinkText>
                            <LinkSubText key={`navSubLinkText-${i}`} $hover={checkHover(i)}>{englishText}</LinkSubText>
                        </Link>
                    ))

                }
            </NavTextWrap>
        }
    </NavWrap>
};