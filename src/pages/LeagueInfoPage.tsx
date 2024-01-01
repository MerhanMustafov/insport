import { TfiAngleLeft } from "react-icons/tfi";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LeagueInfoNavigation from "@/components/pageSpecific/leagueInfoPage/LeagueInfoNavigation";
import Standing from "@/components/pageSpecific/leagueInfoPage/Standing";
import FixtureContainerByStatus from "@/components/pageSpecific/leagueInfoPage/fixtureContainerByStatus";

const StyledLeagueInfoPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;

const StyledBackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const statusLookup = {
  upcoming: "NS",
  live: "LIVE",
  finished: "FT"
};
export default function LeagueInfoPage() {
  const { leagueId, section } = useParams<{ leagueId: string; section: string }>();
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <StyledLeagueInfoPage>
      <StyledBackWrapper onClick={onBackClick}>
        <TfiAngleLeft />
        <span>back</span>
      </StyledBackWrapper>
      <StyledContentWrapper>
        <LeagueInfoNavigation />
        {section === "table" && <Standing />}
        {section === "upcoming" && (
          <FixtureContainerByStatus status={statusLookup[section]} leagueId={leagueId as string} />
        )}
        {section === "live" && (
          <FixtureContainerByStatus status={statusLookup[section]} leagueId={leagueId as string} />
        )}
        {section === "finished" && (
          <FixtureContainerByStatus status={statusLookup[section]} leagueId={leagueId as string} />
        )}
      </StyledContentWrapper>
    </StyledLeagueInfoPage>
  );
}
