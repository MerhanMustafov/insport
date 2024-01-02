import { useEffect } from "react";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import {
  closeCountriesAndLeaguesOpen,
  toggleCountriesAndLeaguesOpen
} from "@/global/redux/slices/toggle.slice";
import AppNavigation from "@/components/shared/AppNavigation";
import ClickAwayBackGroundContainer from "@/components/shared/ClickAwayBackGroundContainer";
import CountriesAndLeagues from "@/sections/CountriesAndLeagues";

interface AppLayoutProps {
  children: React.ReactElement;
  isMobile?: boolean;
}

const StyledLayout = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: 10px 1fr 10px;
  grid-template-rows: max-content 15px 1fr;
  grid-template-areas:
    "APP_HEADER APP_HEADER APP_HEADER"
    ". . ."
    ". APP_MAIN .";
  min-height: 100vh;
  position: relative;
`;

const StyledBurgerMenu = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background: white;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #d0d0d0;
  }
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
`;

function AppLayout({ children, isMobile }: AppLayoutProps) {
  const { isCountriesAndLeaguesOpen } = useAppSelector((state) => state.toggle.burgerMenu);
  const dispatch = useAppDispatch();
  const handleBurgerMenuClick = () => {
    dispatch(toggleCountriesAndLeaguesOpen());
  };

  useEffect(() => {
    if (!isMobile) {
      dispatch(closeCountriesAndLeaguesOpen());
    }
  }, [isMobile]);

  return (
    <StyledLayout>
      {isCountriesAndLeaguesOpen && (
        <>
          <ClickAwayBackGroundContainer onClick={handleBurgerMenuClick} />
          <StyledBurgerMenu>
            <CountriesAndLeagues />
          </StyledBurgerMenu>
        </>
      )}
      <StyledHeader>
        <AppNavigation />
      </StyledHeader>
      <StyledMain>
        <StyledContent>{children}</StyledContent>
      </StyledMain>
    </StyledLayout>
  );
}

export default withScreenSize(AppLayout);
