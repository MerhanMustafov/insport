import CountriesLeagues from "./components/CountriesLeagues";
import { CountryLeagueListProvider } from "./context/CountryLeagueList.context";

export default function CountryLeagueList() {
    return (
        <CountryLeagueListProvider>
            <CountriesLeagues />
        </CountryLeagueListProvider>
    );
}
