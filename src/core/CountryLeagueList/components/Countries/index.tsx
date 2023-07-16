import { useCountriesLeaguesContext } from "../../hooks/useCountriesLeaguesContext";
import SingleCountry from "./SingleCountry";

export default function Countries() {
    const { countries, fileterdCountries } = useCountriesLeaguesContext();

    return (
        <>
            {(fileterdCountries.length > 0 ? fileterdCountries : countries)
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
