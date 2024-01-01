import { useParams } from "react-router-dom";
import styled from "styled-components";
import LeagueInfoNavigation from "@/components/pageSpecific/leagueInfoPage/LeagueInfoNavigation";
import Standing from "@/components/pageSpecific/leagueInfoPage/Standing";

const StyledLeagueInfoPage = styled.div`
  border: 3px solid blue;
  height: 100%;
`;

export default function LeagueInfoPage() {
  const { section } = useParams<{ section: string }>();
  console.log(section, "asdasdsad");

  return (
    <StyledLeagueInfoPage>
      <LeagueInfoNavigation />
      {section === "table" && <Standing />}
      {section === "upcoming" && <div>Upcoming</div>}
      {section === "live" && <div>Live</div>}
      {section === "finished" && <div>Finished</div>}
    </StyledLeagueInfoPage>
  );
}
