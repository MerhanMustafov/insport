import styled from "styled-components";

const StyledCell = styled("td")`
     text-align: center;
     font-size: 10px;
     font-size: clamp(0.7rem, 1.5vw, 1.2rem);
`;

interface IProps {
     cellData: string | number;
     statusLong?: string;
}
export default function Cell(props: IProps) {
     const { cellData, statusLong } = props;

     return <StyledCell title={statusLong}>{cellData}</StyledCell>;
}
