import { createContext } from "react";

import { IUseDatesHook, useDatesHook } from "@/hooks/useDatesHook";

interface IMainScoreBoardContext {
    children: React.ReactNode;
}

export const MainScoreBoardContext = createContext({} as IUseDatesHook);

export function MainScoreBoardProvider(props: IMainScoreBoardContext) {
    const { children } = props;
    const {
        dateToday,
        activeDate,
        handleActiveDateChange,
        getFormatedActiveDateYYYY_MM_DD
    } = useDatesHook();

    return (
        <MainScoreBoardContext.Provider
            value={{
                dateToday,
                activeDate,
                handleActiveDateChange,
                getFormatedActiveDateYYYY_MM_DD
            }}
        >
            {children}
        </MainScoreBoardContext.Provider>
    );
}
