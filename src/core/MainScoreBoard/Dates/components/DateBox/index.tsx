import styled from "styled-components";

const StyledContainer = styled("div")`
    border: 2px solid blue;
`;
const StyledToday = styled("h3")`
    border: 2px solid black;
    color: green;
`;

interface IProps {
    today: boolean;
    activeDate: Date;
    index: number;
}

export default function DateBox(props: IProps) {
    const { today, activeDate, index } = props;
    console.log(index);

    const date = new Date(activeDate);
    date.setDate(activeDate.getDate() + index);

    return (
        <StyledContainer>
            {today && <StyledToday>Today</StyledToday>}
            <div>{date.toDateString()}</div>
        </StyledContainer>
    );
}
