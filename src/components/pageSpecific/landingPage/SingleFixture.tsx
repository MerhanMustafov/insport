import React from "react";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { useAppDispatch } from "@/global/redux/reduxHooks";
import { toggleSingleFixtureModal } from "@/global/redux/slices/toggle.slice";
import { setSingleFixtureId } from "@/global/redux/slices/trackCurrentData.slice";
import { IFixtureStatus } from "@/types/fixtureStatus.type";

const StyledSingleFixture = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: auto;
  column-gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const StyledStatus = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.4)}rem;
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

const StyledTeamName = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.4)}rem;
`;

const StyldResult = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.4)}rem;
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
  isMobile?: boolean;
}

function SingleFixture({
  fixtureId,
  status,
  matchTime,
  teams: {
    home: { name: homeName },
    away: { name: awayName }
  },
  goals: { home: homeGoals, away: awayGoals },
  isMobile
}: SingleFixtureProps) {
  const dispatch = useAppDispatch();
  function getMatchStatus(status: IFixtureStatus) {
    if (status.short === "NS") return matchTime;
    if (status.short === "HT") return "HT";
    if (status.short === "FT") return "FT";
    if (status.elapsed) return `${status.elapsed}'`;
  }
  const matchStatus = getMatchStatus(status);
  const isLive = status.elapsed && status.short !== "NS" && status.short !== "FT";

  const handleSingleFixtureClick = () => {
    dispatch(setSingleFixtureId({ fixtureId: fixtureId }));
    dispatch(toggleSingleFixtureModal());
  };
  return (
    <StyledSingleFixture onClick={handleSingleFixtureClick}>
      <StyledStatus $isMobile={isMobile} className={isLive ? "status-live" : ""}>
        {matchStatus}
      </StyledStatus>
      <StyledTeamsWrapper>
        <StyledTeamWrapper>
          <StyldResult $isMobile={isMobile}>{homeGoals}</StyldResult>
          {/* <Image image={homeLogo} width="24px" height="24px" altText="logo" /> */}
          <StyledTeamName $isMobile={isMobile}>{homeName}</StyledTeamName>
        </StyledTeamWrapper>

        <StyledTeamWrapper>
          <StyldResult $isMobile={isMobile}>{awayGoals}</StyldResult>
          {/* <Image image={awayLogo} width="23px" height="20px" altText="logo" /> */}
          <StyledTeamName $isMobile={isMobile}>{awayName}</StyledTeamName>
        </StyledTeamWrapper>
      </StyledTeamsWrapper>
    </StyledSingleFixture>
  );
}

export default withScreenSize(SingleFixture) as React.FC<SingleFixtureProps>;
