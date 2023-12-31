import styled from "styled-components";
import Image from "@/components/shared/Image";

const StyledSingleFixture = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: auto;
  column-gap: 2rem;
  align-items: center;
  padding: 0.5rem 1.6rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const StyledStatus = styled.span`
  font-size: 1.6rem;
`;

const StyledTeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledTeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledTeamName = styled.span`
  font-size: 1.6rem;
`;

const StyldResult = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

interface SingleFixtureProps {
  status: string;
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  fixtureId: number;
}

export default function SingleFixture({
  // fixtureId,
  status,
  teams: {
    home: { name: homeName, logo: homeLogo },
    away: { name: awayName, logo: awayLogo }
  },
  goals: { home: homeGoals, away: awayGoals }
}: SingleFixtureProps) {
  return (
    <StyledSingleFixture>
      <StyledStatus>{status}</StyledStatus>
      <StyledTeamsWrapper>
        <StyledTeamWrapper>
          <StyldResult>{homeGoals}</StyldResult>
          {/* <Image image={homeLogo} width="24px" height="24px" altText="logo" /> */}
          <StyledTeamName>{homeName}</StyledTeamName>
        </StyledTeamWrapper>

        <StyledTeamWrapper>
          <StyldResult>{awayGoals}</StyldResult>
          {/* <Image image={awayLogo} width="23px" height="20px" altText="logo" /> */}
          <StyledTeamName>{awayName}</StyledTeamName>
        </StyledTeamWrapper>
      </StyledTeamsWrapper>
    </StyledSingleFixture>
  );
}
