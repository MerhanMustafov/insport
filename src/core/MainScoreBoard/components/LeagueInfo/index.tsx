import { useParams } from "react-router-dom";

import styled from "styled-components";

import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import LeagueInfoHeader from "./components/LeagueInfoHeader";
import { ILeague } from "./models/ILeague";

const StyledContainer = styled("div")`
    grid-area: PageScores_LeagueInfo;
`;
const baseEndPoint = "/leagues?current=true";
export default function LeagueInfo() {
    const params = useParams();
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["league", params.leagueName],
        queryFn: getLeagues,
        enabled: !!params.leagueName
    });

    async function getLeagues(): Promise<ILeague[]> {
        const country = params.countryName as string;
        const league = params.leagueName as string;

        const url = `${baseEndPoint}&country=${country}&name=${league}`;
        return ((await axiosInstance.get(url)).data as IAxiosData<ILeague[]>).response;
    }
    // console.log(params);
    // console.log("DATA: ", data);

    return (
        <StyledContainer>
            {(isLoading || isFetching) && <div>Loading ...</div>}
            {data && data?.length > 0 && (
                <div>
                    <LeagueInfoHeader
                        countryName={data[0].country.name}
                        flag={data[0].country.flag}
                        leagueName={data[0].league.name}
                        logo={data[0].league.logo}
                    />
                    <div>LeagueInfo</div>
                </div>
            )}
        </StyledContainer>
    );
}
