import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StandingKeys, useGetLeagueStandingQuery } from "@/global/redux/rtkq/leagues";

const StyledLeagueInfoPage = styled.div`
  border: 3px solid blue;
  height: 100%;
`;

const StyledTable = styled.table`
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;
  min-width: 300px;
`;

const StyledTableHead = styled.thead`
  font-size: 1.3rem;
`;

const StyledTableBody = styled.tbody`
  font-size: 1rem;
`;
const StyledTableRow = styled.tr``;

const StyledTableHeadCell = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 3px 3px;
`;
const StyledTableBodyCell = styled.td`
  text-align: left;
  padding: 3px 2rem 3px 3px;
`;

const tableLookup = ["#", "Team", "P", , "W", "D", "L", "GF", "GA", "GD", "PTS"];

export default function LeagueInfoPage() {
  const { leagueId } = useParams<{ leagueId: string }>();
  const {
    data: standingData,
    isError: standingError,
    isLoading: standingLoading
  } = useGetLeagueStandingQuery({
    leagueId: Number(leagueId),
    season: new Date().getFullYear() - 1
  });
  console.log(standingData, " ", standingError, " ", standingLoading);
  return (
    <StyledLeagueInfoPage>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {tableLookup.map((k) => (
              <StyledTableHeadCell key={k}>{k}</StyledTableHeadCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {standingData?.standing?.map((data) => (
            <StyledTableRow key={data.teamId}>
              {tableLookup.map((key) => (
                <StyledTableBodyCell key={key}>
                  {data[key as Exclude<keyof StandingKeys, "teamId">]}
                </StyledTableBodyCell>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledLeagueInfoPage>
  );
}
