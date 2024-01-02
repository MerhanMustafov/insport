import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { TargetAndTransition, motion } from "framer-motion";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { toggleCountriesAndLeaguesOpen } from "@/global/redux/slices/toggle.slice";
import AppLogo from "@/components/shared/AppLogo";
import { SOCCER } from "@/router/pathConsts";

const StyledNav = styled.nav<{ $isMobile?: boolean }>`
  display: grid;
  flex-direction: row;
  align-items: center;
  grid-template-columns: max-content ${(props) => (props.$isMobile ? 3 : 10)}px max-content auto max-content;
  grid-template-rows: auto;
  grid-template-areas: "APP_NAV_LOGO . APP_NAV_MENU . APP_NAV_LINKS";
  width: 100%;
  max-width: 1900px;
  background: transparent;

  color: #fff;
  padding: ${(props) => (props.$isMobile ? "5px 10px" : "10px 20px")};
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

const StyledLink = styled(motion(Link))<{ $isMobile?: boolean }>`
  color: inherit;
  margin: 0 10px;
  font-size: ${(props) => (props.$isMobile ? 1.4 : 2)}rem;
`;

const StyledBurderMenuWrapper = styled(motion.div)<{ $isMobile?: boolean }>`
  grid-area: APP_NAV_MENU;
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.$isMobile ? 1.4 : 2.5)}rem;
  cursor: pointer;
`;

const linkesAnimationConfig: TargetAndTransition = { opacity: [0, 1], transition: { delay: 0.1 } };

function AppNavigation({ isMobile }: { isMobile?: boolean }) {
  const { isCountriesAndLeaguesOpen } = useAppSelector((state) => state.toggle.burgerMenu);
  const dispatch = useAppDispatch();

  const showBurgerMenu = isMobile && !isCountriesAndLeaguesOpen;

  const handleBurgerMenuClick = () => {
    dispatch(toggleCountriesAndLeaguesOpen());
  };

  return (
    <StyledNav $isMobile={isMobile}>
      <AppLogo />
      {showBurgerMenu && (
        <StyledBurderMenuWrapper
          $isMobile={isMobile}
          animate={linkesAnimationConfig}
          onClick={handleBurgerMenuClick}
        >
          <RiMenuUnfoldLine />
        </StyledBurderMenuWrapper>
      )}

      <StyledUL>
        <StyledLinkWrapper>
          {!isMobile && (
            <StyledLink $isMobile={isMobile} animate={linkesAnimationConfig} to={SOCCER}>
              Soccer
            </StyledLink>
          )}
        </StyledLinkWrapper>
      </StyledUL>
    </StyledNav>
  );
}

export default withScreenSize(AppNavigation);
