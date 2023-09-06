import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import SingleCountry from "./SingleCountry";

export default function Countries() {
    const { countries, filterd, isLoadingCountries, isFetchingCountries } =
        useCountryLeagueListContext();

    if (isLoadingCountries || isFetchingCountries) {
        return <div>LOADING ...</div>;
    }
    // TODO: Cover error case
    return (
        <>
            {countries &&
                (filterd.length > 0 ? filterd : countries)
                    .filter((c) => c.code)
                    .map(
                        (c, i) =>
                            c.code && (
                                <SingleCountry
                                    key={`${c.code}-${i}`}
                                    code={c.code}
                                    name={c.name as string}
                                    flag={c.flag as string}
                                />
                            )
                    )}
        </>
    );
}
