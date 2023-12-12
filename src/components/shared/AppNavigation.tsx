import { Link } from "react-router-dom";
import { TargetAndTransition, motion } from "framer-motion";
import styled from "styled-components";
import AppLogo from "@/components/shared/AppLogo";
import { SOCCER } from "@/router/pathConsts";

const StyledNav = styled.nav`
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
  padding: 5px 10px;
`;

const StyledLink = styled(motion(Link))`
  color: inherit;
  margin: 0 10px;
`;

const linkesAnimationConfig: TargetAndTransition = { opacity: [0, 1], transition: { delay: 1.3 } };

export default function AppNavigation() {
  return (
    <StyledNav>
      <AppLogo />
      <StyledUL>
        <StyledLinkWrapper>
          <StyledLink animate={linkesAnimationConfig} to={SOCCER}>
            Soccer
          </StyledLink>
          <StyledLink animate={linkesAnimationConfig} to="threejs">
            Three
          </StyledLink>
        </StyledLinkWrapper>
      </StyledUL>
    </StyledNav>
  );
}
