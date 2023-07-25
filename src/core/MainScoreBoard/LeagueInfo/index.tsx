import styled from "styled-components";

import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import { useMainScoreBoardContext } from "../hooks/useMainScoreBoardContext";
import CountryFixtures from "./components/CountryFixtures";
import { IFixture } from "./models/index";

const StyledContainer = styled("div")`
    grid-area: PageScores_LeagueInfo;
    max-height: max-content;
    /* border: 2px solid green; */
`;

const baseEndpoint = "/fixtures";
export default function LeagueInfo() {
    const { activeDate, getFormatedActiveDateYYYY_MM_DD } = useMainScoreBoardContext();

    const { data, isLoading, isFetching, isError } = useQuery({
        queryKey: ["fixtures", activeDate],
        queryFn: getFixtures,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    async function getFixtures(): Promise<{ [K: string]: IFixture[] }> {
        const timeZone = "Europe/Sofia";
        const date = getFormatedActiveDateYYYY_MM_DD();
        const URL_ENDPOINT = `${baseEndpoint}?timezone=${timeZone}&date=${date}`;

        const res = (
            (await axiosInstance.get(URL_ENDPOINT)).data as IAxiosData<IFixture[]>
        ).response;
        return res
            .sort((curr: IFixture, next: IFixture) =>
                customSort(curr, next, "asc", "country")
            )
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

    function customSort(
        _curr: IFixture,
        _next: IFixture,
        _sortDirection: "asc" | "desc",
        _sortBy: "country" | "name"
    ): number {
        const curr = _curr.league[_sortBy].toLowerCase().trim();
        const next = _next.league[_sortBy].toLowerCase().trim();
        if (_sortDirection === "asc") {
            if (curr < next) {
                return -1;
            }
            if (curr > next) {
                return 1;
            }
            return 0;
        } else {
            if (curr > next) {
                return -1;
            }
            if (curr < next) {
                return 1;
            }
            return 0;
        }
    }

    return (
        <StyledContainer>
            {(isLoading || isFetching) && <h1>Loading ... </h1>}
            {isError && <div>Erro has occured LeagueInfo</div>}
            {!isLoading &&
                !isFetching &&
                data &&
                Object.entries(data).map(([countryName, fixtures], index: number) => (
                    <CountryFixtures
                        key={`${countryName}-${index}`}
                        countryName={countryName}
                        fixtures={fixtures}
                    />
                ))}
        </StyledContainer>
    );
}
