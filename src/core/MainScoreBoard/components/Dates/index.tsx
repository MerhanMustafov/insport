import styled from "styled-components";

import { useMainScoreBoardContext } from "../../hooks/useMainScoreBoardContext";
import DateBox from "./components/DateBox";

const StyledContainer = styled("div")`
     grid-area: PageScores_Dates;
     /* border: 2px solid red; */
     /* height: max-content; */
     /* border: 2px solid blue; */
`;

const StyledToday = styled("div")<{ $isToday: boolean }>`
     border-bottom: ${({ $isToday }) =>
          $isToday ? "2px solid var(--logo-sport)" : "2px solid transparent"};
     padding: 7px 10px;
     margin: 5px 5px 5px 0;
     cursor: pointer;
     color: var(--logo-sport);
     font-weight: 600;
`;

export default function Dates() {
     const { dateToday, activeDate, handleActiveDateChange } = useMainScoreBoardContext();
     const isToday = dateToday.toDateString() === activeDate.toDateString();

     function handleInputDateChange(e: React.ChangeEvent<HTMLInputElement>) {
          const date = new Date(e.target.value);
          handleActiveDateChange(date);
     }
     function handleTodayDateClick() {
          if (isToday) {
               return;
          }
          handleActiveDateChange(dateToday);
     }

     return (
          <StyledContainer>
               <div
                    style={{
                         display: "block",
                         // border: "2px solid green",
                         margin: "0px 0px 0px auto",
                         width: "max-content"
                    }}
               >
                    <input
                         type="date"
                         onChange={handleInputDateChange}
                         value={activeDate.toISOString().slice(0, 10)}
                    />
               </div>

               <div
                    style={{
                         display: "flex",
                         flexDirection: "row",
                         // border: "2px solid red",
                         justifyContent: "space-between"
                    }}
               >
                    <StyledToday
                         $isToday={isToday}
                         onClick={handleTodayDateClick}
                    >
                         Today
                    </StyledToday>
                    {Array.from(Array(10).keys())
                         .map((_, i) => {
                              if (i === 0) {
                                   return -3;
                              } else {
                                   return -3 + i;
                              }
                         })
                         .map((number, i) => (
                              <DateBox
                                   key={`${number}-${i}`}
                                   today={number === 0}
                                   activeDate={activeDate}
                                   day={number}
                              />
                         ))}
               </div>
          </StyledContainer>
     );
}
