import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoWrap = styled.div`
    padding: 30px 0 20px 60px;
`;

const LogoText = styled.h1`
    letter-spacing: 0.05em;
    font-weight: 600;
    margin: 0;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: #8075FF;
`;

const SubLogoText = styled(LogoText)`
    font-weight: 400;
    display: block;
    text-align: center;
    font-size: 1.5rem;
    color: #6320EE;
`;

const NavTextWrap = styled.div`
    padding-right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    display: block;
    padding-right: 20px;
    z-index: 2;
    &:hover {
        color: #8075FF;
        cursor: pointer;
    }
    &:last-child{
        padding-right: 0px;
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
    color: ${props => props.$hover ? "#F8F0FB" : "#6320EE"};
    transition: 0.2s linear;
`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

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
        if(i === 3)
            navigate("/examples");
        else
            navigate("/");
    }

    return <NavWrap>
        <LogoWrap>
            <LogoText>
                [Lang]La-ng.com
            </LogoText>
            <SubLogoText>
                LangLanguage.com
            </SubLogoText>
        </LogoWrap>
        <NavTextWrap>
            {   
                [
                    ["gt-ngst-rt-d/",  "getting started"],
                    ["sp-k/-ng[Lang]", "speaking Lang"  ], 
                    ["[Lang]cm-un-ty", "Lang community" ],
                    ["Mo-r/Ex-mp-ls",  "More Examples"  ]
                ].map(([langText, englishText], i) => (
                    <Link key={`navLink-${i}`} onClick={onLinkClick(i)} onMouseOver={addHover(i)}  onMouseOut={removeHover(i)}>
                        <LinkText key={`navLinkText-${i}`} $hover={checkHover(i)}>{langText}</LinkText>
                        <LinkSubText key={`navSubLinkText-${i}`} $hover={checkHover(i)}>{englishText}</LinkSubText>
                    </Link>
                ))

            }
        </NavTextWrap>
    </NavWrap>
};