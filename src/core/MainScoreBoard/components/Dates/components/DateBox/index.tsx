import styled from "styled-components";

import { useMainScoreBoardContext } from "../../../../hooks/useMainScoreBoardContext";

const StyledContainer = styled("div")<{ $isActive: boolean }>`
    position: relative;
    border-bottom: ${({ $isActive }) =>
        $isActive ? "2px solid  var(--logo-sport)" : "2px solid transparent"};
    border: ${({ $isActive }) => !$isActive && "2px solid  transparent"};
    padding: 7px 10px;
    margin: 5px auto;
    &:hover {
        border-bottom: ${({ $isActive }) =>
            $isActive ? "" : "2px solid var(--tx-primary)"};
        cursor: pointer;
    }
    &:before {
        content: "${({ $isActive }) => ($isActive ? "*" : "")}";
        position: absolute;
        top: -7px;
        left: -3px;
        color: ${({ $isActive }) => ($isActive ? "var(--logo-sport)" : "")};
    }
`;

const StyledDate = styled("span")`
    font-size: 12px;
    font-weight: 600;
`;

interface IProps {
    today: boolean;
    activeDate: Date;
    day: number;
}

export default function DateBox(props: IProps) {
    const { activeDate, day } = props;
    const { handleActiveDateChange } = useMainScoreBoardContext();

    const date = new Date(activeDate);
    date.setDate(activeDate.getDate() + day);
    const isActive = date.toDateString() === activeDate.toDateString();

    function handleDateClick() {
        if (isActive) {
            return;
        }
        handleActiveDateChange(date);
    }
    return (
        <StyledContainer
            $isActive={isActive}
            onClick={handleDateClick}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <StyledDate>{date.toDateString().split(" ")[0]}</StyledDate>
                <div>
                    <StyledDate>
                        <span>{date.toDateString().split(" ")[1]}</span>{" "}
                        <span>{date.toDateString().split(" ")[2]}</span>
                    </StyledDate>
                    <StyledDate></StyledDate>
                </div>
            </div>
        </StyledContainer>
    );
}
