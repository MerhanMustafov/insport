import { useEffect, useState } from "react";
import { useAppSelector } from "@/global/redux/reduxHooks";

type ISelectedDay = {
  today: { selected: boolean; cl: string };
  yesterday: { selected: boolean; cl: string };
  tomorrow: { selected: boolean; cl: string };
  other: { selected: boolean; cl: string };
};
const initialState: ISelectedDay = {
  today: { selected: false, cl: "" },
  yesterday: { selected: false, cl: "" },
  tomorrow: { selected: false, cl: "" },
  other: { selected: false, cl: "" }
};
export function useNavigationDayActiveLink() {
  const [activeDayLink, setActiveDayLink] = useState<ISelectedDay>(initialState);
  const { activeDate, today, yesterday, tomorrow } = useAppSelector((state) => state.calendar);
  const { activeYear, activeMonth, activeDay } = activeDate;
  const { todayYear, todayMonth, todayDay } = today;
  const { yesterdayYear, yesterdayMonth, yesterdayDay } = yesterday;
  const { tomorrowYear, tomorrowMonth, tomorrowDay } = tomorrow;

  useEffect(() => {
    if (activeYear === todayYear && activeMonth === todayMonth && activeDay === todayDay) {
      setActiveDayLink({ ...initialState, today: { selected: true, cl: "today" } });
    } else if (
      activeYear === yesterdayYear &&
      activeMonth === yesterdayMonth &&
      activeDay === yesterdayDay
    ) {
      setActiveDayLink({ ...initialState, yesterday: { selected: true, cl: "yesterday" } });
    } else if (
      activeYear === tomorrowYear &&
      activeMonth === tomorrowMonth &&
      activeDay === tomorrowDay
    ) {
      setActiveDayLink({ ...initialState, tomorrow: { selected: true, cl: "tomorrow" } });
    } else {
      setActiveDayLink({ ...initialState, other: { selected: true, cl: "other" } });
    }
  }, [activeDate]);

  return activeDayLink;
}
