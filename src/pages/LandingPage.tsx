import styled from "styled-components";
import CountriesAndLeagues from "@/sections/CountriesAndLeagues";

const StyledLandingPage = styled.div`
  /* border: 1px solid red; */
  display: grid;
  margin: 10px 0 0 0;
  /* width: 100%; */
  height: auto;
`;
const StyledLandingPageContent = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: auto;
  grid-template-areas: "LANDING_PAGE_SIDE LANDING_PAGE_MAIN";
  gap: 5rem;
  /* height: 100%; */
`;
const StyledSide = styled.div`
  grid-area: LANDING_PAGE_SIDE;
  /* border: 1px solid red; */
`;
const StyledMain = styled.div`
  grid-area: LANDING_PAGE_MAIN;
  border: 1px solid red;
`;

export default function LandingPage() {
  return (
    <StyledLandingPage>
      <StyledLandingPageContent>
        <StyledSide>
          <CountriesAndLeagues />
        </StyledSide>
        <StyledMain>
          <h1>LandingPage</h1>
        </StyledMain>
      </StyledLandingPageContent>
    </StyledLandingPage>
  );
}
