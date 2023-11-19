import styled from "styled-components";
import CountriesAndLeagues from "@/sections/CountriesAndLeagues";
import DateSpecificMatchView from "@/sections/DateSpecificMatchView";

const StyledLandingPage = styled.div`
  /* border: 3px solid blue; */
  display: grid;
  margin: 10px 0 0 0;
  height: auto;
`;
const StyledLandingPageContent = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  grid-template-areas: "LANDING_PAGE_SIDE LANDING_PAGE_MAIN";
  gap: 50px;
`;
const StyledSide = styled.div`
  /* border: 1px solid red; */
  grid-area: LANDING_PAGE_SIDE;
`;
const StyledMain = styled.div`
  border: 1px solid red;
  grid-area: LANDING_PAGE_MAIN;
`;

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <StyledLandingPageContent>
        <StyledSide>
          <CountriesAndLeagues />
        </StyledSide>
        <StyledMain>
          <DateSpecificMatchView />
        </StyledMain>
      </StyledLandingPageContent>
    </StyledLandingPage>
  );
}
