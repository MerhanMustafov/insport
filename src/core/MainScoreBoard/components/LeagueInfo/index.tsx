import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import styled from "styled-components";

import LeagueInfoRoutes from "@/core/MainScoreBoard/components/LeagueInfo/routes/LeagueInfoRoutes";
import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import LeaguInfoNav from "./components/LeaguInfoNav";
import LeagueInfoHeader from "./components/LeagueInfoHeader";
import { ILeague } from "./models/ILeague";
import { TypeActiveNavLink } from "./models/TypeActiveNavLink";

const StyledContainer = styled("div")`
    grid-area: PageScores_LeagueInfo;
    /* border: 2px solid green; */
`;

const baseEndPoint = "/leagues?current=true";
export default function LeagueInfo() {
    const [urlPath, setUrlPath] = useState("");
    const [activeNavPath, setActiveNavPath] = useState<TypeActiveNavLink>("overview");
    const params = useParams();
    const location = useLocation();

    useEffect(() => {
        handleSetUrlPathOnMount();
        handleSetActiveOnMount();
    }, [params]);

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["league", params.leagueName],
        queryFn: getLeagues,
        enabled: !!params.leagueName,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    async function getLeagues(): Promise<ILeague[]> {
        const country = params.countryName as string;
        const league = params.leagueName as string;

        const url = `${baseEndPoint}&country=${country}&name=${league}`;
        return ((await axiosInstance.get(url)).data as IAxiosData<ILeague[]>).response;
    }

    function handleSetUrlPathOnMount() {
        const path = `/football/${params.countryName as string}/${
            params.leagueName as string
        }/${params.leagueId as string}`;

        setUrlPath(path);
    }

    function handleSetActiveOnMount() {
        const regExOverview = new RegExp("overview", "i");
        const regExFixtures = new RegExp("matches", "i");
        const regExMore = new RegExp("table", "i");
        if (regExOverview.test(location.pathname)) {
            setActiveNavPath("overview");
        } else if (regExFixtures.test(location.pathname)) {
            setActiveNavPath("matches");
        } else if (regExMore.test(location.pathname)) {
            setActiveNavPath("table");
        } else {
            setActiveNavPath("overview");
        }
    }
    function handleNavClick(clickedNav: TypeActiveNavLink) {
        setActiveNavPath(clickedNav);
    }
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
                    <LeaguInfoNav
                        active={activeNavPath}
                        urlPath={urlPath}
                        handleNavClick={handleNavClick}
                    />
                    <LeagueInfoRoutes />
                </div>
            )}
        </StyledContainer>
    );
}
