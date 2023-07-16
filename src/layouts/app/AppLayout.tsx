import styled from "styled-components";

import AppNavigation from "@/core/navigation/AppNavigation";

interface IProps {
    children: React.ReactNode;
}
const StyledAppLayoutContainer = styled("div")`
    display: flex;
    flex-direction: column;
    background: var(--bg-primary);
    min-height: 100vh;
`;
export default function AppLayout({ children }: IProps) {
    return (
        <StyledAppLayoutContainer>
            <AppNavigation />
            {children}
        </StyledAppLayoutContainer>
    );
}
