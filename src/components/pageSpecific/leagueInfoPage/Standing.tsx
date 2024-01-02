import { useParams } from "react-router-dom";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { useAppSelector } from "@/global/redux/reduxHooks";
import { StandingKeys, useGetLeagueStandingQuery } from "@/global/redux/rtkq/leagues";

const StyledWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`;

const StyledTable = styled.table`
  border: 1px solid #001e28;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  position: relative;

  @media screen and (max-width: 430px) {
    display: block;
    table-layout: auto;
    width: 90vw;
    overflow-x: scroll;
    position: relative;
  }
`;

const StyledTableHead = styled.thead<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 0.8 : 1.3)}rem;
  background: #001e28;
  color: white;
  position: sticky;
  top: -1px;
`;

const StyledTableBody = styled.tbody<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 0.6 : 1.2)}rem;
`;
const StyledTableRow = styled.tr``;

const StyledTableHeadCell = styled.th`
  text-align: left;
  padding: 1rem;
`;
const StyledTableBodyCell = styled.td`
  text-align: left;
  padding: 1rem 2rem 1rem 1rem;
`;

const tableCols = ["#", "Team", "P", , "W", "D", "L", "GF", "GA", "GD", "PTS"];
function Standing({ isMobile }: { isMobile?: boolean }) {
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
        <StyledTableHead $isMobile={isMobile}>
          <StyledTableRow>
            {tableCols.map((k) => (
              <StyledTableHeadCell key={k}>{k}</StyledTableHeadCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody $isMobile={isMobile}>
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

export default withScreenSize(Standing);
