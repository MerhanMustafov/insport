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
    date: Date;
}

export default function DateBox(props: IProps) {
    const { today, date } = props;

    return (
        <StyledContainer>
            {today && <StyledToday>Today</StyledToday>}
            <div>{date.toDateString()}</div>
        </StyledContainer>
    );
}
