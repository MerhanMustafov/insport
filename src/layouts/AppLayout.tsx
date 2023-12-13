import styled from "styled-components";
import AppNavigation from "@/components/shared/AppNavigation";

interface AppLayoutProps {
  children: React.ReactElement;
}

const StyledLayout = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    "APP_HEADER"
    "APP_MAIN";
  height: 100vh;
`;

const StyledHeader = styled.div`
  grid-area: APP_HEADER;
  background: #001e28;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const StyledMain = styled.div`
  grid-area: APP_MAIN;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledContent = styled.div`
  width: 100%;
  max-width: 1900px;
  padding: 5px 10px;
`;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <StyledLayout>
      <StyledHeader>
        <AppNavigation />
      </StyledHeader>
      <StyledMain>
        <StyledContent>{children}</StyledContent>
      </StyledMain>
    </StyledLayout>
  );
}
