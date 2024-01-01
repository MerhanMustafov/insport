import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StandingKeys, useGetLeagueStandingQuery } from "@/global/redux/rtkq/leagues";

const StyledTable = styled.table`
  table-layout: fixed;
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableHead = styled.thead`
  font-size: 1.3rem;
`;

const StyledTableBody = styled.tbody`
  font-size: 1.2rem;
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

const tableCols = ["#", "Team", "P", , "W", "D", "L", "GF", "GA", "GD", "PTS"];
export default function Standing() {
  const { leagueId } = useParams<{ leagueId: string }>();
  const {
    data: standingData,
    isError: standingError,
    isLoading: standingLoading
  } = useGetLeagueStandingQuery({
    leagueId: Number(leagueId),
    season: new Date().getFullYear() - 1
  });

  if (standingLoading) return <div>Loading...</div>;
  if (standingError) return <div>Error...</div>;

  return (
    <StyledTable>
      <StyledTableHead>
        <StyledTableRow>
          {tableCols.map((k) => (
            <StyledTableHeadCell key={k}>{k}</StyledTableHeadCell>
          ))}
        </StyledTableRow>
      </StyledTableHead>
      <StyledTableBody>
        {standingData?.standing?.map((data) => (
          <StyledTableRow key={data.teamId}>
            {tableCols.map((key) => (
              <StyledTableBodyCell key={key}>
                {data[key as Exclude<keyof StandingKeys, "teamId">]}
              </StyledTableBodyCell>
            ))}
          </StyledTableRow>
        ))}
      </StyledTableBody>
    </StyledTable>
  );
}
