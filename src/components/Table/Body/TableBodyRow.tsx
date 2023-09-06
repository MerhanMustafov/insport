import { IFormattedFixturesData } from "@/models/table/IFixturesTableData";

import TableFixturesBodyRow from "./Fixtures/TableFixturesBodyRow/TableFixturesBodyRow";

interface IProps {
    type: "fixtures";
    data: IFormattedFixturesData[];
    colNames: (keyof IFormattedFixturesData)[];
}

export default function TableBodyRow(props: IProps) {
    const { data, type, colNames } = props;
    if (type === "fixtures") {
        return (
            <TableFixturesBodyRow
                data={data}
                colNames={colNames}
            />
        );
    }
}
