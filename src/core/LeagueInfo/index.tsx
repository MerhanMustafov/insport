import styled from "styled-components";

import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import CountryFixtureWrapper from "./components/CountryFixtureWrapper";
import { IFixture } from "./models/index";

const StyledContainer = styled("div")`
    grid-area: LeagueInfo;
    border: 2px solid blue;
    max-height: max-content;
`;

const endpoint = "/fixtures?timezone=Europe/Sofia&date=2023-07-24&status=NS";
export default function LeagueInfo() {
    const { data, isLoading, isFetching, isError } = useQuery({
        queryKey: ["fixtures"],
        queryFn: getFixtures,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    async function getFixtures(): Promise<{ [K: string]: IFixture[] }> {
        const res = ((await axiosInstance.get(endpoint)).data as IAxiosData<IFixture[]>)
            .response;
        return res
            .sort(sortAscByCountryName)
            .reduce((acc: { [K: string]: IFixture[] }, curr) => {
                if (acc[curr.league.country]) {
                    return {
                        ...acc,
                        [curr.league.country]: [...acc[curr.league.country], curr]
                    };
                }
                return { ...acc, [curr.league.country]: [curr] };
            }, {});
    }

    function sortAscByCountryName(_curr: IFixture, _next: IFixture) {
        const curr = _curr.league.country.toLowerCase().trim();
        const next = _next.league.country.toLowerCase().trim();

        if (curr < next) {
            return -1; // CURR should come before NEXT in the sorted order
        }
        if (curr > next) {
            return 1; // CURR should come after NEXT in the sorted order
        }
        return 0; // names are equal, no change in order
    }

    return (
        <StyledContainer>
            <div>LeagueInfo Component</div>
            {(isLoading || isFetching) && <h1>Loading ... </h1>}
            {isError && <div>Erro has occured LeagueInfo</div>}
            {data &&
                Object.entries(data).map(([countryName, fixtures], index: number) => (
                    <CountryFixtureWrapper
                        key={`${countryName}-${index}`}
                        countryName={countryName}
                        fixtures={fixtures}
                    />
                ))}
        </StyledContainer>
    );
}
