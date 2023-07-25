import { useEffect, useState } from "react";

import styled from "styled-components";

import { useMainScoreBoardContext } from "../hooks/useMainScoreBoardContext";
import DateBox from "./components/DateBox";

const StyledContainer = styled("div")`
    grid-area: Dates;
    /* border: 2px solid red; */
    height: max-content;
    /* align-items: center; */
    /* height: max-content; */
`;

const StyledToday = styled("div")<{ $isToday: boolean }>`
    border-bottom: ${({ $isToday }) =>
        $isToday ? "2px solid var(--logo-sport)" : "2px solid transparent"};
    /* align-self: stretch; */
    padding: 7px 10px;
    margin: 5px 5px 5px 0;
    cursor: pointer;
    color: var(--logo-sport);
    font-weight: 600;
`;

export default function Dates() {
    const { dateToday, activeDate, handleActiveDateChange } = useMainScoreBoardContext();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const isToday = dateToday.toDateString() === activeDate.toDateString();
    const [dates, setDates] = useState<{
        TwoDaysBefore: string;
        OneDayBefore: string;
        today: string;
        OneDayAfter: string;
        TwoDayssAfter: string;
    } | null>(null);

    // useEffect(() => {
    //     const theDayBeforeYesterday = new Date(selectedDate);
    //     theDayBeforeYesterday.setDate(selectedDate.getDate() - 2);

    //     const yesterdayDate = new Date(selectedDate);
    //     yesterdayDate.setDate(selectedDate.getDate() - 1);

    //     const tomorrowDate = new Date(selectedDate);
    //     tomorrowDate.setDate(selectedDate.getDate() + 1);
    //     const twoDaysAheadDate = new Date(selectedDate);
    //     twoDaysAheadDate.setDate(selectedDate.getDate() + 2);

    //     // Convert the dates to formatted strings
    //     const selectedDateString = selectedDate.toDateString();
    //     const yesterdayDateString = yesterdayDate.toDateString();
    //     const thedaybeforeyeaterdayDateString = theDayBeforeYesterday.toDateString();
    //     const tomorrowDateString = tomorrowDate.toDateString();
    //     const twoDaysAheadDateString = twoDaysAheadDate.toDateString();
    //     setDates({
    //         TwoDaysBefore: thedaybeforeyeaterdayDateString,
    //         OneDayBefore: yesterdayDateString,
    //         today: selectedDateString,
    //         OneDayAfter: tomorrowDateString,
    //         TwoDayssAfter: twoDaysAheadDateString
    //     });
    //     // console.log(thedaybeforeyeaterdayDateString);
    //     // console.log(yesterdayDateString);
    //     // console.log(selectedDateString);
    //     // console.log(tomorrowDateString);
    //     // console.log(twoDaysAheadDateString);
    // }, [selectedDate]);

    // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedDateValue = new Date(event.target.value);
    //     setSelectedDate(selectedDateValue);
    // };

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

    if (dates) {
        console.log(Object.entries(dates));
    }

    console.log(
        "TESTY",
        Array.from(Array(5).keys()).map((_, i) => {
            if (i === 0) {
                return -3;
            } else {
                return -3 + i;
            }
        })
    );

    return (
        <StyledContainer>
            <div
                style={{
                    display: "block",
                    // border: "2px solid green",
                    // position: "relative"
                    margin: "0px 0px 0px auto",
                    // right: "0px",
                    width: "max-content"
                }}>
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
                    // alignItems: "center"

                    // height: "max-content"
                }}>
                <StyledToday
                    $isToday={isToday}
                    onClick={handleTodayDateClick}>
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

                {dates &&
                    Object.entries(dates)?.map(([key, value]) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid red",
                                margin: "5px",
                                padding: "10px"
                            }}
                            key={value.split(" ")[2]}>
                            {" "}
                            <span> {value.split(" ")[0]}</span>{" "}
                            <span> {value.split(" ")[1]}</span>{" "}
                            <span> {value.split(" ")[2]}</span>
                        </div>
                    ))}
            </div>
        </StyledContainer>
    );
}
