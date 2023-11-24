import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";

const StyledCell = styled("div")`
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1.6rem;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px 10px;
  color: rgb(161, 161, 161);
`;

export default function CalendarWeekDaysStringsCells() {
  const { weekDaysStrings } = useAppSelector((state) => state.calendar);

  return (
    <>
      {weekDaysStrings.map((dayString) => (
        <StyledCell key={`${dayString}-${Math.random() * 100}`}>{dayString}</StyledCell>
      ))}
    </>
  );
}
