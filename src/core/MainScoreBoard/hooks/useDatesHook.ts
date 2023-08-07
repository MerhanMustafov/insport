import { useState } from "react";

export interface IUseDatesHook {
     dateToday: Date;
     activeDate: Date;
     handleActiveDateChange: (date: Date) => void;
     getFormatedActiveDateYYYY_MM_DD: () => string;
}

export function useDatesHook(): IUseDatesHook {
     const [dateToday] = useState(new Date());
     const [activeDate, setActivedate] = useState(new Date());

     function handleActiveDateChange(date: Date) {
          setActivedate(date);
     }
     function getFormatedActiveDateYYYY_MM_DD() {
          const year = activeDate.getFullYear();
          const month =
               activeDate.getMonth() + 1 < 10
                    ? `0${activeDate.getMonth() + 1}`
                    : activeDate.getMonth() + 1;
          const day =
               activeDate.getDate() < 10
                    ? `0${activeDate.getDate()}`
                    : activeDate.getDate();
          return `${year}-${month}-${day}`;
     }

     return {
          dateToday,
          activeDate,
          handleActiveDateChange,
          getFormatedActiveDateYYYY_MM_DD
     };
}
