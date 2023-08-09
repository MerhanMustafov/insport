import styled from "styled-components";

import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";

import TableHeadCell from "./TableHeadCell";

const StyledHeadRow = styled("tr")`
     background: var(--logo-sport);
`;

interface IProps {
     cols: (keyof IFormattedFixturesData)[];
}

export default function TableHeadRow(props: IProps) {
     const { cols } = props;
     return (
          <StyledHeadRow>
               {cols.map((colName, i) => (
                    <TableHeadCell
                         key={`${colName}-${i}`}
                         colName={colName}
                    />
               ))}
          </StyledHeadRow>
     );
}
