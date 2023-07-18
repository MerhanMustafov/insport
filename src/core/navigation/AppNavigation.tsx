import { NavLink } from "react-router-dom";

import styled from "styled-components";

import AppLogo from "@/core/navigation/AppLogo";
import { routePaths } from "@/routes/routePaths";

const StyledNavigationContainer = styled("div")`
    background: var(--nav-bg);
`;
const StyledNavigationMainContentContainer = styled("nav")`
    border: 2px solid red;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: max-content auto;
    grid-template-areas: "logo mainNavLinks";
    align-items: center;
    gap: 20px;
    max-width: var(--max-width-app-content);
    margin: 10px auto;
    background: transparent;
`;
const StyledUnorderedList = styled("ul")`
    grid-area: mainNavLinks;
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
                <AppLogo />
                <StyledUnorderedList>
                    <StyledLinkContainer>
                        <StyledNavLink to={routePaths.SCORES}>Scores</StyledNavLink>
                    </StyledLinkContainer>
                </StyledUnorderedList>
            </StyledNavigationMainContentContainer>
        </StyledNavigationContainer>
    );
}
