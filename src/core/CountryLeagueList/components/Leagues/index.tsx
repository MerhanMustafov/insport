import { useCountriesLeaguesContext } from "../../hooks/useCountriesLeaguesContext";
import SingleLeague from "./SingleLeague";

export default function Leagues() {
    const { leagues } = useCountriesLeaguesContext();

    return leagues.map((c) => (
        <SingleLeague
            key={c.league.id}
            id={c.league.id}
            logo={c.league.logo}
            name={c.league.name}
            type={c.league.type}
        />
    ));
}
