import { StyledBodyCell } from "@/styles/Table/Table.styles";

interface IProps {
     content: string | number;
}
export default function TableBodyCell(props: IProps) {
     const { content } = props;

     return <StyledBodyCell>{content}</StyledBodyCell>;
}
