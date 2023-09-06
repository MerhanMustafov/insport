import styled from "styled-components";

import AppNavigation from "@/core/Nav/AppNavigation/AppNavigation";

interface IProps {
    children: React.ReactNode;
}
const StyledAppLayoutContainer = styled("div")`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: max-content 10px auto 10px;
    grid-template-areas:
        "App_Navigation"
        "."
        "App_MainContent"
        ".";
    min-height: 100vh;
`;
const StyledAppNavigation = styled("div")`
    grid-area: App_Navigation;
`;
const StyledAppMainContent = styled("div")`
    grid-area: App_MainContent;
`;

export default function AppLayout({ children }: IProps) {
    return (
        <StyledAppLayoutContainer>
            <StyledAppNavigation>
                <AppNavigation />
            </StyledAppNavigation>

            <StyledAppMainContent>{children}</StyledAppMainContent>
        </StyledAppLayoutContainer>
    );
}
