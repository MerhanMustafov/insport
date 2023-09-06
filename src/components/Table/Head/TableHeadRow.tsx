import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";
import { StyledHeadRow } from "@/styles/Table/Table.styles";

import TableHeadCell from "./TableHeadCell";

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
