import styled from "styled-components";

import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";

import TableBodyCell from "../../TableBodyCell";
import TableBodyCellResults from "./TableBodyCellResults";
import TableBodyCellStatus from "./TableBodyCellStatus";
import TableBodyCellTeams from "./TableBodyCellTeams";

const StyledBodyRow = styled("tr")`
     /* background: var(--logo-sport); */
     border-bottom: 2px solid var(--logo-sport);
`;
interface IProps {
     data: IFormattedFixturesData[];
     colNames: (keyof IFormattedFixturesData)[];
}
export default function TableFixturesBodyRow(props: IProps) {
     const { data, colNames } = props;

     return (
          <>
               {data.map((d, i) => (
                    <StyledBodyRow key={`TableFixturesBodyRow-row-${i}`}>
                         {colNames.map((colName, i) => {
                              if (colName === "result") {
                                   return (
                                        <TableBodyCellResults
                                             key={`${d[colName].home}-${d[colName].away}-${i}`}
                                             homeTeamScore={d[colName].home}
                                             awayTeamScore={d[colName].away}
                                        />
                                   );
                              } else if (colName === "teams") {
                                   return (
                                        <TableBodyCellTeams
                                             key={`${d[colName].home.name}-${d[colName].away.name}-${i}`}
                                             home={d[colName].home}
                                             away={d[colName].away}
                                        />
                                   );
                              } else if (colName === "status") {
                                   return (
                                        <TableBodyCellStatus
                                             key={`status-${d[colName].short}-${
                                                  d[colName].long
                                             }-${Math.random()}-${i}`}
                                             statusShort={d[colName].short}
                                             statusLong={d[colName].long}
                                        />
                                   );
                              } else {
                                   return (
                                        <TableBodyCell
                                             key={`${d[colName]}-${i}`}
                                             content={d[colName]}
                                        />
                                   );
                              }
                         })}
                    </StyledBodyRow>
               ))}
          </>
     );
}
