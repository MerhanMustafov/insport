import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetLeagueStandingQuery } from "@/global/redux/rtkq/leagues";

const StyledLeagueInfoPage = styled.div`
  border: 3px solid blue;
  height: 100%;
`;

export default function LeagueInfoPage() {
  const { leagueId } = useParams<{ leagueId: string }>();
  const {
    data: standingData,
    isError: standingError,
    isLoading: standingLoading
  } = useGetLeagueStandingQuery({ leagueId: Number(leagueId), season: new Date().getFullYear() });
  console.log(standingData, " ", standingError, " ", standingLoading);
  return (
    <StyledLeagueInfoPage>
      {standingData?.standing?.map((data) => <div key={data.team.id}>{data.team.name}</div>)}
    </StyledLeagueInfoPage>
  );
}
