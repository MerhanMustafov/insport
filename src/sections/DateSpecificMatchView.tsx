import styled from "styled-components";
import DateSpecificLeaguesMatchInfo from "@/components/pageSpecific/landingPage/DateSpecificLeaguesMatchInfo";
import DateSpecificViewNavigation from "@/components/pageSpecific/landingPage/DateSpecificViewNavigation";

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 0px 20px 0 0;
`;

export default function DateSpecificMatchView() {
  return (
    <StyledWrapper>
      <DateSpecificViewNavigation />
      <DateSpecificLeaguesMatchInfo />
    </StyledWrapper>
  );
}
