import { Link } from "react-router-dom";

import styled from "styled-components";

import AppLogo from "@/components/AppLogo";
import { SOCCER } from "@/router/pathConsts";

interface AppLayoutProps {
  children: React.ReactElement;
}

const StyledAppLayout = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas:
    "APP_HEADER"
    "APP_MAIN";
  height: 100vh;
`;

const StyledAppLayoutHeader = styled.div`
  /* border: 2px solid blue; */
  grid-area: APP_HEADER;
  background: #001e28;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledNav = styled.nav`
  /* border: 2px solid red; */
  display: grid;
  flex-direction: row;
  align-items: center;
  grid-template-columns: max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "APP_NAV_LOGO . APP_NAV_LINKS";
  width: 100%;
  max-width: 1900px;
  background: transparent;

  color: #fff;
  padding: 15px 20px;
  font-size: 2rem;
`;

const StyledUL = styled.ul`
  grid-area: APP_NAV_LINKS;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledLinkWrapper = styled.li`
  /* border: 1px solid green; */
  padding: 5px 10px;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const StyledAppLayoutMain = styled.div`
  border: 2px solid blue;
  grid-area: APP_MAIN;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledContent = styled.div`
  border: 2px solid blue;
  width: 100%;
  height: auto;
  max-width: 1900px;
  padding: 5px 10px;
`;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <StyledAppLayout>
      <StyledAppLayoutHeader>
        <StyledNav>
          <AppLogo />
          <StyledUL>
            <StyledLinkWrapper>
              <StyledLink to={SOCCER}>Soccer</StyledLink>
            </StyledLinkWrapper>
          </StyledUL>
        </StyledNav>
      </StyledAppLayoutHeader>
      <StyledAppLayoutMain>
        <StyledContent>{children}</StyledContent>
      </StyledAppLayoutMain>
    </StyledAppLayout>
  );
}
