import { useContext } from "react";

import { CountryLeagueListContext } from "@/context/CountryLeagueList.context";
import { MainScoreBoardContext } from "@/context/MainScoreBoard.context";
import { ThemeContext } from "@/context/theme/Theme.context";

export const useThemeContext = () => useContext(ThemeContext);
export const useCountryLeagueListContext = () => useContext(CountryLeagueListContext);
export const useMainScoreBoardContext = () => useContext(MainScoreBoardContext);
