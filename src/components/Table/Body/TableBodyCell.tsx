import styled from "styled-components";

const StyledBodyCell = styled("td")`
     padding: var(--table-row-padding);
     text-align: center;
`;
interface IProps {
     content: string | number;
}
export default function TableBodyCell(props: IProps) {
     const { content } = props;

     return <StyledBodyCell>{content}</StyledBodyCell>;
}
