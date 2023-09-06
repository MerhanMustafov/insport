import { getLeagues } from "@/api/getLeagues";
import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import SingleLeague from "./SingleLeague";

export default function Leagues() {
    const { leagues, isLoadingLeagues, isFetchingLeagues } =
        useCountryLeagueListContext();

    if (isLoadingLeagues || isFetchingLeagues) {
        return <div>LOADING ...</div>;
    }
    // TODO: Cover error case
    return (
        leagues &&
        leagues.map((c) => (
            <SingleLeague
                key={c.league.id}
                id={c.league.id}
                logo={c.league.logo}
                name={c.league.name}
                type={c.league.type}
                countryName={c.country.name as string}
            />
        ))
    );
}
