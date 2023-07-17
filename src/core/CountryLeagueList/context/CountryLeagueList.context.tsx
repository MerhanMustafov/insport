import { createContext, useEffect, useState } from "react";

import axiosInstance, { resolvePath } from "@/lib/axios/axiosConfig";
import { IAxiosData, ICountry, ILeague, ISeason } from "@/models/api";

import { SEARCH_INPUT_DEBOUNCE_TIMER } from "../data/consts";

interface ICountriesLeaguesProps {
    isLoading: boolean;
    countries: ICountry[];
    fileterdCountries: ICountry[];
    searchWord: string;
    selectedCountry: string;
    leagues: ILeagueData[];
    handleCountrySelection: (countryName: string) => void;
    handleClearSelectedCountry: () => void;
    handleSerachInputFieldChange: (value: string) => void;
}

interface ILeagueData {
    league: ILeague;
    country: ICountry;
    seasons: ISeason;
}
type TLeagues = IAxiosData<ILeagueData[]>;
interface IThemeProvider {
    children: React.ReactNode;
}

export const CountryLeagueListContext = createContext<ICountriesLeaguesProps>({
    countries: [] as ICountry[],
    fileterdCountries: [] as ICountry[],
    searchWord: "",
    selectedCountry: "",
    leagues: [] as ILeagueData[]
} as ICountriesLeaguesProps);

export function CountryLeagueListProvider({ children }: IThemeProvider) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [countries, setCountries] = useState<ICountry[]>([]);
    const [fileterdCountries, setFilteredCountries] = useState<ICountry[]>([]);
    const [searchWord, setSearchWord] = useState<string>("");
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [leagues, setLeagues] = useState<ILeagueData[]>([]);
    useEffect(() => {
        setIsLoading(true);
        axiosInstance
            .get(resolvePath("/countries"))
            .then((res) => setCountries((res.data as IAxiosData<ICountry[]>).response))
            .catch((err) => console.log("Error while getting Countries: ", err))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            setIsLoading(true);

            axiosInstance
                .get(resolvePath(`/leagues?country=${selectedCountry}`))
                .then((res) => setLeagues((res.data as TLeagues).response))
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false));
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (searchWord) {
            const filteredCountriesData = setTimeout(() => {
                setIsLoading(true);
                const filtered = [...countries].filter(
                    (c: ICountry) =>
                        c.name
                            ?.toLocaleLowerCase()
                            ?.includes(searchWord.toLocaleLowerCase())
                );

                filtered.length > 0 && setFilteredCountries(filtered);
                setIsLoading(false);
            }, SEARCH_INPUT_DEBOUNCE_TIMER);

            return () => clearTimeout(filteredCountriesData);
        }
    }, [searchWord]);

    function handleCountrySelection(countryName: string) {
        setFilteredCountries([]);
        setSearchWord("");
        setSelectedCountry(countryName);
    }
    function handleClearSelectedCountry() {
        setSelectedCountry("");
    }

    function handleSerachInputFieldChange(value: string) {
        if (!value) {
            setFilteredCountries([]);
        }
        setSearchWord(value);
    }

    return (
        <CountryLeagueListContext.Provider
            value={{
                isLoading,
                countries,
                fileterdCountries,
                searchWord,
                selectedCountry,
                leagues,
                handleCountrySelection,
                handleClearSelectedCountry,
                handleSerachInputFieldChange
            }}>
            {children}
        </CountryLeagueListContext.Provider>
    );
}
