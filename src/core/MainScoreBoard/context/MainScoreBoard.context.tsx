import { createContext, useState } from "react";

import { IUseDatesHook, useDatesHook } from "../hooks/useDatesHook";

interface IMainScoreBoardContext {
    children: React.ReactNode;
}

interface IMainScoreBoardProps extends IUseDatesHook {
    x?: string;
}
export const MainScoreBoardContext = createContext({} as IMainScoreBoardProps);

export function MainScoreBoardProvider(props: IMainScoreBoardContext) {
    const { children } = props;
    const { dateToday, activeDate, handleActiveDateChange } = useDatesHook();

    return (
        <MainScoreBoardContext.Provider
            value={{ dateToday, activeDate, handleActiveDateChange }}>
            {children}
        </MainScoreBoardContext.Provider>
    );
}
