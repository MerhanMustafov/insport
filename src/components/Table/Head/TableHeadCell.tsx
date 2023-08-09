import styled from "styled-components";

import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";

const StyledHeadCell = styled("th")`
     padding: var(--table-row-padding);
     text-align: center;
`;
interface IProps {
     colName: keyof IFormattedFixturesData;
}
export default function TableHeadCell(props: IProps) {
     const { colName } = props;

     return (
          <StyledHeadCell>{colName[0].toUpperCase() + colName.slice(1)}</StyledHeadCell>
     );
}
