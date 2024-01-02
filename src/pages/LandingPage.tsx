import { TargetAndTransition, motion } from "framer-motion";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import CountriesAndLeagues from "@/sections/CountriesAndLeagues";
import DateSpecificMatchView from "@/sections/DateSpecificMatchView";

const StyledLandingPage = styled.div``;

const StyledLandingPageContent = styled("div")<{ $isMobile?: boolean }>`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  grid-template-areas: "LANDING_PAGE_SIDE LANDING_PAGE_MAIN";
  gap: ${(props) => (props.$isMobile ? 0 : 2)}rem;
`;
const StyledSide = styled.div`
  grid-area: LANDING_PAGE_SIDE;
`;
const StyledMain = styled.div`
  grid-area: LANDING_PAGE_MAIN;
`;

function LandingPage({ isMobile }: { isMobile?: boolean }) {
  const sideAnimationConfig: TargetAndTransition = {
    opacity: [0, 1],
    overflow: ["hidden", "visible"],
    transition: { delay: 0.3, ease: "easeIn" }
  };
  const mainAnimationConfig: TargetAndTransition = {
    opacity: [0, 1],
    overflow: ["hidden", "visible"],
    transition: { delay: 0.4, ease: "easeIn" }
  };

  return (
    <StyledLandingPage>
      <StyledLandingPageContent $isMobile={isMobile}>
        {!isMobile && (
          <StyledSide as={motion.div} animate={sideAnimationConfig}>
            <CountriesAndLeagues />
          </StyledSide>
        )}

        <StyledMain as={motion.div} animate={mainAnimationConfig}>
          <DateSpecificMatchView />
        </StyledMain>
      </StyledLandingPageContent>
    </StyledLandingPage>
  );
}

export default withScreenSize(LandingPage);
