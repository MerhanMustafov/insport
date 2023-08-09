import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import TableBodyRow from "@/components/Table/Body/TableBodyRow";
import TableHeadRow from "@/components/Table/Head/TableHeadRow";
import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";
import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

import { useQuery } from "@tanstack/react-query";

import StickyTableHeadLayout from "../../Layouts/StickyTableHeadLayout";
import LeagueInfoHeader from "../../components/Header/LeagueInfoHeader";
import Cell from "../../components/Table/TableBodyCells/Cell/Cell";
import ResultsCell from "../../components/Table/TableBodyCells/ResultsCell/ResultsCell";
import TeamsCell from "../../components/Table/TableBodyCells/TeamsCell/TeamsCell";
import TableHeader from "../../components/Table/TableHeader/TableHeader";
import { IFixtures } from "../../models/IFixtures";
import { IFormattedFixturesData } from "../../models/ITable";

const StyledContainer = styled("div")`
     /* border: 5px solid green; */
     grid-area: PageScores_LeagueInfo;
     margin: 20px 25px;
     box-shadow: 0px 0px 10px 1px gray;
     height: auto;

     @media (max-width: 2560px) {
          margin: 20px 40px;
     }

     @media (max-width: 1440px) {
          margin: 20px 35px;
     }
     @media (max-width: 1024px) {
          margin: 20px 25px;
     }
     @media (max-width: 768px) {
          margin: 20px 10px;
     }
     @media (max-width: 425px) {
          margin: 20px 0px;
     }
`;

const StyledTable = styled("table")`
     /* border: 5px solid blue; */
     border-collapse: collapse;
     background: rgba(0, 30, 30);
     color: white;
     width: 100%;
`;
const StyledTableRow = styled("tr")`
     /* border: 5px solid red; */
     border-collapse: collapse;
     border-bottom: 1px solid var(--logo-sport);
`;

// const baseEndPoint = "/leagues?current=true";
export default function LeagueInfo() {
     const [columns, setColumns] = useState<(keyof IFormattedFixturesData)[]>([]);
     const [originalData, setOriginalData] = useState<IFixtures[]>([]);
     const [currentData, setCurrentlData] = useState<IFormattedFixturesData[]>([]);
     const params = useParams();
     useEffect(() => {
          activeLinkObserver.leagueInfoNav.notify("Fixtures");
     }, []);

     const { isLoading: isFixtureDataLoading, isRefetching: isFixtureDataRefetching } =
          useQuery({
               queryKey: ["fixtues", params.leagueId],
               queryFn: getFixturesData,
               enabled: !!params.leagueId,
               refetchOnWindowFocus: false
          });

     async function getFixturesData(): Promise<IFixtures[]> {
          const year = new Date().getFullYear();
          const res = await axiosInstance.get(
               `/fixtures?league=${params.leagueId as string}&season=${year}`
          );
          const data = (res.data as IAxiosData<IFixtures[]>).response;
          setOriginalData(data);

          if (data.length > 0) {
               const formatted = data.reduce((acc, curr, i) => {
                    const date = new Date(curr.fixture.date);

                    const day =
                         date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
                    const month =
                         date.getMonth() + 1 < 10
                              ? `0${date.getMonth() + 1}`
                              : date.getMonth() + 1;
                    const hours =
                         date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
                    const minutes =
                         date.getMinutes() < 10
                              ? `0${date.getMinutes()}`
                              : date.getMinutes();
                    const time = `${hours}:${minutes}`;
                    return [
                         ...acc,
                         {
                              n: i + 1,
                              status: {
                                   short: curr.fixture.status.short,
                                   long: curr.fixture.status.long
                              },
                              result: curr.goals,
                              teams: {
                                   home: {
                                        name: curr.teams.home.name,
                                        logo: curr.teams.home.logo
                                   },
                                   away: {
                                        name: curr.teams.away.name,
                                        logo: curr.teams.away.logo
                                   }
                              },
                              date: `${day}-${month}-${date.getFullYear()}`,
                              time: time,

                              round: curr?.league?.round
                         }
                    ] as IFormattedFixturesData[];
               }, [] as IFormattedFixturesData[]);
               setCurrentlData(formatted);
               setColumns(Object.keys(formatted[0]) as (keyof IFormattedFixturesData)[]);
          }
          // setColumns( cols)
          return data;
     }

     if (isFixtureDataLoading || isFixtureDataRefetching) {
          return (
               <StyledContainer>
                    <div
                         style={{
                              padding: "100px 0px",
                              background: "rgba(0, 30, 30)",
                              color: "var(--logo-sport)",
                              boxShadow: "0px 0px 10px 1px gray"
                         }}
                    >
                         <h1 style={{ textAlign: "center" }}>LOADING ...</h1>
                    </div>
               </StyledContainer>
          );
     }

     if (originalData.length === 0) {
          return (
               <StyledContainer
                    style={{
                         overflowY: "unset"
                    }}
               >
                    <div
                         style={{
                              padding: "100px 0px",
                              background: "rgba(0, 30, 30)",
                              color: "var(--logo-sport)",
                              boxShadow: "0px 0px 10px 1px gray"
                         }}
                    >
                         <h1
                              style={{
                                   textAlign: "center",
                                   position: "sticky",
                                   top: "10px"
                              }}
                         >
                              NO DATA IS AVAILABLE ...
                         </h1>
                    </div>
               </StyledContainer>
          );
     }

     return (
          <StyledContainer>
               {/* <LeagueInfoNavigation /> */}
               <StyledTable>
                    <StickyTableHeadLayout>
                         {originalData.length > 0 && (
                              <LeagueInfoHeader
                                   colLength={columns.length}
                                   countryName={originalData[0].league.country}
                                   leagueName={originalData[0].league.name}
                                   leagueLogo={originalData[0].league.logo}
                              />
                         )}
                         {/* <TableHeader cols={columns} /> */}
                         {columns.length > 0 && <TableHeadRow cols={columns} />}
                    </StickyTableHeadLayout>
                    <tbody>
                         {currentData.length > 0 && (
                              <TableBodyRow
                                   data={currentData}
                                   colNames={columns}
                                   type="fixtures"
                              />
                         )}
                         {/* {currentData.length > 0
                              ? currentData.map((data, i) => (
                                     <StyledTableRow key={`${data.date}-${i}`}>
                                          {columns.length > 0 &&
                                               columns.map((col, i) => {
                                                    if (col === "result") {
                                                         return (
                                                              <ResultsCell
                                                                   key={`result-teams-${i}`}
                                                                   homeTeamScore={
                                                                        data[col].home
                                                                   }
                                                                   awayTeamScore={
                                                                        data[col].away
                                                                   }
                                                              />
                                                         );
                                                    }
                                                    if (col === "teams") {
                                                         return (
                                                              <TeamsCell
                                                                   key={`$teams-${i}`}
                                                                   home={data[col].home}
                                                                   away={data[col].away}
                                                              />
                                                         );
                                                    }

                                                    if (col === "status") {
                                                         return (
                                                              <Cell
                                                                   key={`status-${i}`}
                                                                   cellData={
                                                                        data[col].short
                                                                   }
                                                                   statusLong={
                                                                        data[col].long
                                                                   }
                                                              />
                                                         );
                                                    } else {
                                                         return (
                                                              <Cell
                                                                   cellData={data[col]}
                                                                   key={`${data[col]}-${i}`}
                                                              ></Cell>
                                                         );
                                                    }
                                               })}
                                     </StyledTableRow>
                                ))
                              : null} */}
                    </tbody>
               </StyledTable>
          </StyledContainer>
     );
}
