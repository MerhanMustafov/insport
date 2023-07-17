import { useQuery } from "@tanstack/react-query";

import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import { getLeagues } from "../../services";
import SingleLeague from "./SingleLeague";

export default function Leagues() {
    const { selectedCountry } = useCountryLeagueListContext();

    const {
        data: leagues,
        isLoading,
        isFetching
    } = useQuery({
        queryKey: ["leagues", selectedCountry],
        queryFn: () => getLeagues(selectedCountry),
        enabled: !!selectedCountry,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    if (isLoading || isFetching) {
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
