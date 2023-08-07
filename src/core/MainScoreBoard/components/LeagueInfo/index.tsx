import { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import LeagueInfoNavigation from "@/core/Nav/LeagueInfoNavigation/LeagueInfoNavigation";
import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import LeagueInfoHeader from "./components/Header/LeagueInfoHeader";
import TeamsCell from "./components/TeamsCell/TeamsCell";
import { IFixtures } from "./models/IFixtures";

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
const StyledTableCellHead = styled("th")`
     border-collapse: collapse;
     padding: 5px;
     /* font-size: 10px; */
     font-size: clamp(0.7rem, 1.5vw, 1.2rem);

     background: var(--logo-sport);
`;
const StyledTableCellBody = styled("td")`
     text-align: center;
     font-size: 10px;
     font-size: clamp(0.7rem, 1.5vw, 1.2rem);
`;

interface IFormattedData {
     n: number;
     teams: {
          home: {
               name: string;
               logo: string;
          };
          away: {
               name: string;
               logo: string;
          };
     };
     date: string;
     time: string;
     round: string;
     result: {
          home: number;
          away: number;
     };
}
// const baseEndPoint = "/leagues?current=true";
export default function LeagueInfo() {
     const [columns, setColumns] = useState<(keyof IFormattedData)[]>([]);
     const [originalData, setOriginalData] = useState<IFixtures[]>([]);
     const [currentData, setCurrentlData] = useState<IFormattedData[]>([]);
     const params = useParams();
     const {
          data: fixtures,
          isLoading: isFixtureDataLoading,
          isRefetching: isFixtureDataRefetching
     } = useQuery({
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
                              date: `${day}-${month}-${date.getFullYear()}` as string,
                              time: time as string,

                              round: curr?.league?.round
                         }
                    ] as IFormattedData[];
               }, [] as IFormattedData[]);
               setCurrentlData(formatted);
               setColumns(Object.keys(formatted[0]) as (keyof IFormattedData)[]);
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
          <>
               <StyledContainer>
                    <LeagueInfoNavigation />
                    <StyledTable>
                         <thead
                              style={{
                                   position: "sticky",
                                   top: -2,
                                   zIndex: "1"
                              }}
                         >
                              {originalData.length > 0 && (
                                   <LeagueInfoHeader
                                        colLength={columns.length}
                                        countryName={originalData[0].league.country}
                                        leagueName={originalData[0].league.name}
                                        leagueLogo={originalData[0].league.logo}
                                   />
                              )}

                              <StyledTableRow>
                                   {columns.length > 0 &&
                                        columns.map((col, i) => {
                                             if (col === "n") {
                                                  return (
                                                       <StyledTableCellHead
                                                            style={{
                                                                 fontStyle: "italic"
                                                            }}
                                                            id={col}
                                                            key={`${col}-${i}`}
                                                       >
                                                            {col[0].toUpperCase() +
                                                                 col.slice(1)}
                                                       </StyledTableCellHead>
                                                  );
                                             } else {
                                                  return (
                                                       <StyledTableCellHead
                                                            id={col}
                                                            key={`${col}-${i}`}
                                                       >
                                                            {col[0].toUpperCase() +
                                                                 col.slice(1)}
                                                       </StyledTableCellHead>
                                                  );
                                             }
                                        })}
                              </StyledTableRow>
                         </thead>
                         <tbody>
                              {currentData.length > 0
                                   ? currentData.map((data, i) => (
                                          <StyledTableRow key={`${data.date}-${i}`}>
                                               {columns.length > 0 &&
                                                    columns.map((col, i) => {
                                                         if (col === "result") {
                                                              return (
                                                                   <td
                                                                        style={{
                                                                             textAlign:
                                                                                  "center"
                                                                        }}
                                                                   >
                                                                        <div
                                                                             style={{
                                                                                  display: "flex",
                                                                                  flexDirection:
                                                                                       "column",
                                                                                  justifyContent:
                                                                                       "space-between",
                                                                                  gap: 10
                                                                             }}
                                                                        >
                                                                             <div
                                                                                  style={{}}
                                                                             >
                                                                                  {
                                                                                       data[
                                                                                            col
                                                                                       ]
                                                                                            .home
                                                                                  }
                                                                             </div>
                                                                             <div
                                                                                  style={
                                                                                       {
                                                                                            //   display: "block"
                                                                                       }
                                                                                  }
                                                                             >
                                                                                  {
                                                                                       data[
                                                                                            col
                                                                                       ]
                                                                                            .away
                                                                                  }
                                                                             </div>
                                                                        </div>
                                                                   </td>
                                                              );
                                                         }
                                                         if (col === "teams") {
                                                              return (
                                                                   <TeamsCell
                                                                        key={`${data[col]}-${i}`}
                                                                        home={
                                                                             data[col]
                                                                                  .home
                                                                        }
                                                                        away={
                                                                             data[col]
                                                                                  .away
                                                                        }
                                                                   />
                                                              );
                                                         } else {
                                                              return (
                                                                   <StyledTableCellBody
                                                                        key={`${data[col]}-${i}`}
                                                                   >
                                                                        {data[col]}
                                                                   </StyledTableCellBody>
                                                              );
                                                         }
                                                    })}
                                          </StyledTableRow>
                                     ))
                                   : null}
                         </tbody>
                    </StyledTable>
               </StyledContainer>
          </>
     );
}
