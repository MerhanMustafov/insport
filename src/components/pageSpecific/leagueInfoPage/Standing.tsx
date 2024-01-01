import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";
import { StandingKeys, useGetLeagueStandingQuery } from "@/global/redux/rtkq/leagues";

const StyledWrapper = styled.div`
  padding: 5px 10px 5px 10px;
`;

const StyledTable = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
`;

const StyledTableHead = styled.thead`
  font-size: 1.3rem;
  background: #001e28;
  color: white;
  position: sticky;
  top: -1px;
`;

const StyledTableBody = styled.tbody`
  font-size: 1.2rem;
`;
const StyledTableRow = styled.tr``;

const StyledTableHeadCell = styled.th`
  text-align: left;
  padding: 1rem 1rem;
`;
const StyledTableBodyCell = styled.td`
  text-align: left;
  padding: 1rem 2rem 1rem 1rem;
`;

const tableCols = ["#", "Team", "P", , "W", "D", "L", "GF", "GA", "GD", "PTS"];
export default function Standing() {
  const { currentYear } = useAppSelector((state) => state.calendar);
  const { leagueId } = useParams<{ leagueId: string }>();
  const {
    data: standingData,
    isError: standingError,
    isLoading: standingLoading
  } = useGetLeagueStandingQuery({
    leagueId: Number(leagueId),
    season: currentYear
  });

  if (standingLoading) return <div>Loading...</div>;
  if (standingError) return <div>Error...</div>;

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
}
