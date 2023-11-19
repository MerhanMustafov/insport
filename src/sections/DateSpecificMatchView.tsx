import { useState } from "react";
import styled from "styled-components";

const StyledHTMLCalendar = styled.input``;

export default function DateSpecificMatchView() {
  const [date, setDate] = useState(new Date());

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const _month = month < 10 ? `0${month}` : month;
    const _day = day < 10 ? `0${day}` : day;

    return `${year}-${_month}-${_day}`;
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div>
      <h1>DateSpecificMatchView</h1>
      <StyledHTMLCalendar type="date" value={formatDate(date)} onChange={handleDateChange} />
    </div>
  );
}
