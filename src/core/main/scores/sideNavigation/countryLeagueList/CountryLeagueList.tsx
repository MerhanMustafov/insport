import { CountryLeagueListProvider } from "@/context/CountryLeagueList.context";

import CountriesLeagues from "./components/CountriesLeagues";

export default function CountryLeagueList() {
    return (
        <CountryLeagueListProvider>
            <CountriesLeagues />
        </CountryLeagueListProvider>
    );
}
