import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";
import { StyledHeadCell } from "@/styles/Table/Table.styles";

interface IProps {
    colName: keyof IFormattedFixturesData;
}
export default function TableHeadCell(props: IProps) {
    const { colName } = props;

    return <StyledHeadCell>{colName[0].toUpperCase() + colName.slice(1)}</StyledHeadCell>;
}
