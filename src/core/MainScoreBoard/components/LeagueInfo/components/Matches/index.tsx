import { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

import styled from "styled-components";

import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import { IFixtures } from "../../models/IFixtures";

const StyledNavLink = styled("div")<{ $isActive: boolean }>`
    color: ${({ $isActive }) => ($isActive ? "var(--logo-sport)" : "black")};
    font-weight: ${({ $isActive }) => $isActive && 600};
    padding: 10px;
    border: 1px solid black;
    display: inline-block;
    font-size: 13px;
    cursor: pointer;
`;

const baseUrl = `/fixtures?timezone=Europe/Sofia`;
type TypeActiveNav = "all" | "ht" | "1h" | "2h" | "ft" | "live";
export default function Matches() {
    const [urlPath, setUrlPath] = useState("");
    const [activeNavPath, setActiveNavPath] = useState<TypeActiveNav>("all");
    const params = useParams();
    const location = useLocation();
    console.log("Matches: ", params);
    console.log("Matches: ", location);

    useEffect(() => {
        handleSetUrlPathOnMount();
        handleSetActiveNavLinkOnMount();
    }, []);
    function handleSetUrlPathOnMount() {
        const path = `/football/${params.countryName as string}/${
            params.leagueName as string
        }/${params.leagueId as string}/matches`;

        setUrlPath(path);
    }

    function handleSetActiveNavLinkOnMount() {
        const regExAll = new RegExp("all", "i");
        const regExHT = new RegExp("ht", "i");
        const regEx1H = new RegExp("1h", "i");
        const regEx2H = new RegExp("2h", "i");
        const regExFT = new RegExp("ft", "i");
        if (regExAll.test(location.pathname)) {
            setActiveNavPath("all");
        } else if (regExHT.test(location.pathname)) {
            setActiveNavPath("ht");
        } else if (regEx1H.test(location.pathname)) {
            setActiveNavPath("1h");
        } else if (regEx2H.test(location.pathname)) {
            setActiveNavPath("2h");
        } else if (regExFT.test(location.pathname)) {
            setActiveNavPath("ft");
        } else {
            setActiveNavPath("all");
        }
    }
    function handleNavClick(value: TypeActiveNav) {
        setActiveNavPath(value);
    }
    const { data } = useQuery({
        queryKey: ["matches", params.leagueName, activeNavPath],
        queryFn: getMatches,
        enabled: !!activeNavPath,
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

    async function getMatches(): Promise<IFixtures[]> {
        const league = `league=${params.leagueId as string}`;
        const season = `season=${new Date().getFullYear()}`;
        let status = "";
        if (activeNavPath === "1h") {
            status = "status=1H";
        } else if (activeNavPath === "ht") {
            status = "status=HT";
        } else if (activeNavPath === "2h") {
            status = "status=2H";
        } else if (activeNavPath === "ft") {
            status = "status=FT";
        } else if (activeNavPath === "live") {
            status = "status=1H-HT-2H";
        }
        const url = `${baseUrl}&${league}&${season}&${status}`;
        return ((await axiosInstance.get(url)).data as IAxiosData<IFixtures[]>).response;
    }

    return (
        <div>
            <div>{/* <StyledMatchesNav to>Live</StyledMatchesNav> */}</div>
            <div>
                <StyledNavLink
                    onClick={() => handleNavClick("live")}
                    $isActive={activeNavPath === "live"}>
                    LIVE
                </StyledNavLink>
                <StyledNavLink
                    onClick={() => handleNavClick("all")}
                    $isActive={activeNavPath === "all"}>
                    All
                </StyledNavLink>
                <StyledNavLink
                    onClick={() => handleNavClick("1h")}
                    $isActive={activeNavPath === "1h"}>
                    1H
                </StyledNavLink>
                <StyledNavLink
                    onClick={() => handleNavClick("2h")}
                    $isActive={activeNavPath === "2h"}>
                    2H
                </StyledNavLink>
                <StyledNavLink
                    onClick={() => handleNavClick("ht")}
                    $isActive={activeNavPath === "ht"}>
                    HT
                </StyledNavLink>
                <StyledNavLink
                    onClick={() => handleNavClick("ft")}
                    $isActive={activeNavPath === "ft"}>
                    OVER
                </StyledNavLink>
            </div>
            <div>Matches Component</div>
            <div>COUNT OF MATHCES: {data && data.length}</div>
            {data &&
                data.length > 0 &&
                data.map((d) => (
                    <div
                        style={{ border: "2px solid red", margin: "10px" }}
                        key={d.fixture.id}>
                        <pre> {JSON.stringify(d, null, 5)}</pre>
                    </div>
                ))}
        </div>
    );
}
