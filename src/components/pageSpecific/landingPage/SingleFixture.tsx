import styled from "styled-components";
import Image from "@/components/shared/Image";
import { IFixtureStatus } from "@/types/fixtureStatus.type";

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
  &.status-live {
    color: #ff0040;
  }
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
  status: IFixtureStatus;
  matchTime: string;
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
  matchTime,
  teams: {
    home: { name: homeName, logo: homeLogo },
    away: { name: awayName, logo: awayLogo }
  },
  goals: { home: homeGoals, away: awayGoals }
}: SingleFixtureProps) {
  function getMatchStatus(status: IFixtureStatus) {
    if (status.short === "NS") return matchTime;
    if (status.short === "HT") return "HT";
    if (status.short === "FT") return "FT";
    if (status.elapsed) return `${status.elapsed}'`;
  }
  const matchStatus = getMatchStatus(status);
  const isLive = status.elapsed && status.short !== "NS" && status.short !== "FT";
  return (
    <StyledSingleFixture>
      <StyledStatus className={isLive ? "status-live" : ""}>{matchStatus}</StyledStatus>
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
