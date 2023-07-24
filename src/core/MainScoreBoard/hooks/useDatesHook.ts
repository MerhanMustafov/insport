import { useState } from "react";

export interface IUseDatesHook {
    dateToday: Date;
    activeDate: Date;
    handleActiveDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function useDatesHook(): IUseDatesHook {
    const [dateToday, setDateToday] = useState(new Date());
    const [activeDate, setActivedate] = useState(new Date());

    const handleActiveDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDateValue = new Date(event.target.value);
        setActivedate(selectedDateValue);
    };

    return { dateToday, activeDate, handleActiveDateChange };
}
