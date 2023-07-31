import { NavLink } from "react-router-dom";

import styled from "styled-components";

import AppLogo from "@/components/AppLogo";

const StyledNavigationContainer = styled("div")`
    background: var(--nav-bg);
`;
const StyledNavigationMainContentContainer = styled("nav")`
    /* border: 2px solid red; */
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: max-content 30px auto;
    grid-template-areas: "App_Navigation_Logo . App_Navigation_LeftNavContent";
    align-items: center;
    max-width: var(--max-width-app-content);
    margin: 0 auto;
    background: transparent;
`;

const StyledAppNavigationLogo = styled("ul")`
    grid-area: App_Navigation_Logo;
`;

const StyledAppNavigationLeftNavLinks = styled("ul")`
    grid-area: App_Navigation_LeftNavContent;
`;

const StyledLinkContainer = styled("li")`
    padding: 15px 0;
`;
const StyledNavLink = styled(NavLink)`
    font-size: var(--font-size-medium);
    color: var(--nav-tx);
    font-weight: 600;
`;

export default function AppNavigation() {
    return (
        <StyledNavigationContainer>
            <StyledNavigationMainContentContainer>
                <StyledAppNavigationLogo>
                    <AppLogo />
                </StyledAppNavigationLogo>
                <StyledAppNavigationLeftNavLinks>
                    <StyledLinkContainer>
                        <StyledNavLink to={"/scores"}>Scores</StyledNavLink>
                    </StyledLinkContainer>
                </StyledAppNavigationLeftNavLinks>
            </StyledNavigationMainContentContainer>
        </StyledNavigationContainer>
    );
}
