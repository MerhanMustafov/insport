import { useState } from "react";

export interface IUseDatesHook {
    dateToday: Date;
    activeDate: Date;
    handleActiveDateChange: (date: Date) => void;
}

export function useDatesHook(): IUseDatesHook {
    const [dateToday, setDateToday] = useState(new Date());
    const [activeDate, setActivedate] = useState(new Date());

    const handleActiveDateChange = (date: Date) => {
        setActivedate(date);
    };

    return { dateToday, activeDate, handleActiveDateChange };
}
