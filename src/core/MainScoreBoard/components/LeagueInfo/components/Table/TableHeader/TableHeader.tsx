import styled from "styled-components";

import { IFormattedFixturesData } from "../../../models/ITable";

const StyledTableRow = styled("tr")`
    /* border: 5px solid red; */
    border-collapse: collapse;
    border-bottom: 1px solid var(--logo-sport);
`;

const StyledTableCellHead = styled("th")`
    border-collapse: collapse;
    padding: 5px;
    /* font-size: 10px; */
    font-size: clamp(0.7rem, 1.5vw, 1.2rem);

    background: var(--logo-sport);
`;

interface IProps {
    cols: (keyof IFormattedFixturesData)[];
}
export default function TableHeader(props: IProps) {
    const { cols } = props;
    return (
        <StyledTableRow>
            {cols.map((col, i) => {
                if (col === "n") {
                    return (
                        <StyledTableCellHead
                            style={{
                                fontStyle: "italic"
                            }}
                            id={col}
                            key={`${col}-${i}`}
                        >
                            {col[0].toUpperCase() + col.slice(1)}
                        </StyledTableCellHead>
                    );
                } else {
                    return (
                        <StyledTableCellHead
                            id={col}
                            key={`${col}-${i}`}
                        >
                            {col[0].toUpperCase() + col.slice(1)}
                        </StyledTableCellHead>
                    );
                }
            })}
        </StyledTableRow>
    );
}
