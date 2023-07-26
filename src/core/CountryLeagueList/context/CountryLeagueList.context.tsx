import { createContext, useState } from "react";

interface ICountriesLeaguesProps {
    searchWord: string;
    selectedCountry: string;
    setSearchWord: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}

interface ICountryLeagueListContext {
    children: React.ReactNode;
}

export const CountryLeagueListContext = createContext<ICountriesLeaguesProps>({
    searchWord: "",
    selectedCountry: ""
} as ICountriesLeaguesProps);

export function CountryLeagueListProvider(props: ICountryLeagueListContext) {
    const { children } = props;
    const [searchWord, setSearchWord] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    return (
        <CountryLeagueListContext.Provider
            value={{
                searchWord,
                selectedCountry,
                setSearchWord,
                setSelectedCountry
            }}>
            {children}
        </CountryLeagueListContext.Provider>
    );
}
