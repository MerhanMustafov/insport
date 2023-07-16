import { useContext } from "react";

import { CountryLeagueListContext } from "../context/CountryLeagueList.context";

export const useCountriesLeaguesContext = () => useContext(CountryLeagueListContext);
