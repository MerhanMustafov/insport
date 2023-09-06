import { createContext, useEffect, useState } from "react";

import { ICountryData, getCountries } from "@/api/getCountries";
import { ILeagueData, getLeagues } from "@/api/getLeagues";

import { useQuery } from "@tanstack/react-query";

interface IContextValues {
    searchWord: string;
    selectedCountry: string;
    setSearchWord: React.Dispatch<React.SetStateAction<string>>;
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;

    countries: ICountryData[] | undefined;
    filterd: ICountryData[] | [];
    isLoadingCountries: boolean;
    isFetchingCountries: boolean;

    leagues: ILeagueData[] | undefined;
    isLoadingLeagues: boolean;
    isFetchingLeagues: boolean;
}

const initialState = {
    searchWord: "",
    selectedCountry: "",

    countries: undefined,
    filterd: [],
    isLoadingCountries: false,
    isFetchingCountries: false,

    leagues: undefined,
    isLoadingLeagues: false,
    isFetchingLeagues: false
} as IContextValues;

export const CountryLeagueListContext = createContext(initialState);
interface ICountryLeagueListContext {
    children: React.ReactNode;
}

export function CountryLeagueListProvider(props: ICountryLeagueListContext) {
    const { children } = props;

    const [searchWord, setSearchWord] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");

    const [filterd, setFiltered] = useState<ICountryData[]>([]);

    // get countries data
    const {
        data: countries,
        isLoading: isLoadingCountries,
        isFetching: isFetchingCountries
    } = useQuery({
        queryKey: ["countries"],
        queryFn: getCountries,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    // get leagues data
    const {
        data: leagues,
        isLoading: isLoadingLeagues,
        isFetching: isFetchingLeagues
    } = useQuery({
        queryKey: ["leagues", selectedCountry],
        queryFn: () => getLeagues(selectedCountry),
        enabled: !!selectedCountry,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    // filter countries data if a search word is typed with debounce
    useEffect(() => {
        if (searchWord.length > 0) {
            const setFilteredData = setTimeout(() => {
                const data = countries?.filter(
                    (c) => c.name?.toLowerCase().includes(searchWord.toLowerCase())
                ) as ICountryData[];
                setFiltered(data);
            }, 600);
            return () => clearTimeout(setFilteredData);
        }
        setFiltered([]);
    }, [searchWord]);

    return (
        <CountryLeagueListContext.Provider
            value={{
                searchWord,
                setSearchWord,
                selectedCountry,
                setSelectedCountry,

                countries,
                filterd,
                isLoadingCountries,
                isFetchingCountries,

                leagues,
                isLoadingLeagues,
                isFetchingLeagues
            }}
        >
            {children}
        </CountryLeagueListContext.Provider>
    );
}
