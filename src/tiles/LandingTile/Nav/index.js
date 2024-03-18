import styled from "styled-components";

const NavWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LogoWrap = styled.div`
    padding: 30px 0 20px 60px;
    color: #8075FF;
`;

const LogoText = styled.h1`
    letter-spacing: 0.05em;
    font-weight: 600;
    margin: 0;
    font-size: 2.5rem;
    line-height: 2.5rem;
`;

const SubLogoText = styled(LogoText)`
    font-weight: 400;
    display: block;
    text-align: center;
    font-size: 1.5rem;
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
    color: black;
    color: inherit;
`;

const LinkSubText = styled.span`
    display: block;
    text-align: center;
    color: #CAD5CA;
    color: inherit;
    font-size: 0.75rem;
`;

const scrollToElementWithID = (id) => {
    document.getElementById(id)?.scrollIntoView();
}

export const Nav = () => {

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
            <Link onClick={() => {}}>
                <LinkText>gt-ngst-rt-d/</LinkText>
                <LinkSubText>getting started</LinkSubText>
            </Link>
            <Link onClick={() => {}}>
                <LinkText>gt-ngst-rt-d/</LinkText>
                <LinkSubText>getting started</LinkSubText>
            </Link>
            <Link onClick={() => {}}>
                <LinkText>Ex-mp-ls</LinkText>
                <LinkSubText>Examples</LinkSubText>
            </Link>
            <Link onClick={() => {}}>
                <LinkText>[Lang]cm-un-ty</LinkText>
                <LinkSubText>Lang community</LinkSubText>
            </Link>
        </NavTextWrap>
    </NavWrap>
};