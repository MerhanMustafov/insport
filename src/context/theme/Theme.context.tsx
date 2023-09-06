import { createContext, useState } from "react";

import { THEME } from "@/context/theme/theme.config";
import { ITheme, ThemeType } from "@/context/theme/theme.models";

interface IThemeContextProps {
    themeType: ThemeType;
    theme: ITheme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
    themeType: "light",
    theme: THEME["light"]
} as IThemeContextProps);

interface IThemeProvider {
    children: React.ReactNode;
}

export function ThemeProvider({ children }: IThemeProvider) {
    const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");

    function toggleTheme() {
        setCurrentTheme((prev: ThemeType) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider
            value={{
                themeType: currentTheme,
                theme: THEME[currentTheme],
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
