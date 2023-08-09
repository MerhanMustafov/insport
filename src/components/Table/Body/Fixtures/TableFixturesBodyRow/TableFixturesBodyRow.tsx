import styled from "styled-components";

import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";

import TableBodyCell from "../../TableBodyCell";

const StyledBodyRow = styled("tr")`
     /* background: var(--logo-sport); */
`;
interface IProps {
     data: IFormattedFixturesData[];
     colNames: (keyof IFormattedFixturesData)[];
}
export default function TableFixturesBodyRow(props: IProps) {
     const { data, colNames } = props;

     return (
          <>
               {data.map((d) => (
                    <StyledBodyRow>
                         {colNames.map((colName) => {
                              if (colName === "result") {
                                   return <>asd</>;
                              } else if (colName === "teams") {
                                   return <>asd</>;
                              } else if (colName === "status") {
                                   return <>asd</>;
                              } else {
                                   return <TableBodyCell content={d[colName]} />;
                              }
                         })}
                    </StyledBodyRow>
               ))}
          </>
     );
}
