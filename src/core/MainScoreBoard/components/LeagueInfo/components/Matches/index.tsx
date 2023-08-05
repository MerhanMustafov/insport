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
     }, []);
     function handleSetUrlPathOnMount() {
          const path = `/football/${params.countryName as string}/${
               params.leagueName as string
          }/${params.leagueId as string}/matches`;

          setUrlPath(path);
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
          return ((await axiosInstance.get(url)).data as IAxiosData<IFixtures[]>)
               .response;
     }

     return (
          <div>
               <div>asdsad</div>
          </div>
     );
}
