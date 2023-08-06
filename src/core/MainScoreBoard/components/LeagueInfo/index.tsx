import { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import { IFixtures } from "./models/IFixtures";

const StyledContainer = styled("div")`
     grid-area: PageScores_LeagueInfo;
     margin: 20px 60px;
     box-shadow: 0px 0px 10px 1px gray;
`;

const StyledTable = styled("table")`
     border-collapse: collapse;
     background: rgba(0, 30, 30);
     color: white;
     width: 100%;
     /* border: 8px solid blue; */
`;
const StyledTableRow = styled("tr")`
     border-collapse: collapse;
     border-bottom: 1px solid var(--logo-sport);
`;
const StyledTableCellHead = styled("th")`
     border-collapse: collapse;
     padding: 5px;
     font-size: 10px;
     position: sticky;
     top: 30px;
     background: var(--logo-sport);
`;
const StyledTableCellBody = styled("td")`
     text-align: center;
     font-size: 10px;
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
                              display: "block",
                              height: "100%",
                              margin: "30px",
                              padding: "100px 0px",
                              background: "rgba(0, 30, 30)",
                              color: "var(--logo-sport)"
                         }}>
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
                    }}>
                    <div
                         style={{
                              margin: "30px auto",
                              padding: "100px 0px",
                              background: "rgba(0, 30, 30)",
                              color: "var(--logo-sport)",
                              boxShadow: "0px 0px 10px 1px gray"
                         }}>
                         <h1
                              style={{
                                   textAlign: "center",
                                   position: "sticky",
                                   top: "10px"
                              }}>
                              NO DATA IS AVAILABLE ...
                         </h1>
                    </div>
               </StyledContainer>
          );
     }

     return (
          <StyledContainer>
               <StyledTable>
                    <thead
                         style={{
                              position: "sticky",
                              top: -2
                         }}>
                         {originalData.length > 0 && (
                              <tr>
                                   <th
                                        colSpan={5}
                                        style={{
                                             background: "red"
                                        }}>
                                        <div
                                             style={{
                                                  display: "flex",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  gap: "10px",
                                                  background: "#343636",
                                                  color: "white",
                                                  padding: "5px 0px 5px 5px",
                                                  width: "auto",
                                                  position: "sticky",
                                                  top: -3
                                             }}>
                                             <div style={{ width: "25px" }}>
                                                  <img
                                                       style={{ width: "100%" }}
                                                       src={originalData[0].league.logo}
                                                       alt=""
                                                  />
                                             </div>
                                             <span
                                                  style={{
                                                       fontSize: "8px",
                                                       color: "#cccccc"
                                                  }}>
                                                  {originalData[0].league.country}
                                             </span>
                                             <span>/</span>
                                             <span style={{ fontSize: "12px" }}>
                                                  {originalData[0].league.name}
                                             </span>
                                        </div>
                                   </th>
                              </tr>
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
                                                       key={`${col}-${i}`}>
                                                       {col[0].toUpperCase() +
                                                            col.slice(1)}
                                                  </StyledTableCellHead>
                                             );
                                        } else {
                                             return (
                                                  <StyledTableCellHead
                                                       id={col}
                                                       key={`${col}-${i}`}>
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
                                                    if (col === "teams") {
                                                         return (
                                                              <TeamsCell
                                                                   key={`${data[col]}-${i}`}
                                                                   home={data[col].home}
                                                                   away={data[col].away}
                                                              />
                                                         );
                                                    } else {
                                                         return (
                                                              <StyledTableCellBody
                                                                   key={`${data[col]}-${i}`}>
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
     );
}

interface ITeamsCellProps {
     home: {
          name: string;
          logo: string;
     };
     away: {
          name: string;
          logo: string;
     };
}
function TeamsCell(props: ITeamsCellProps) {
     const { away, home } = props;
     return (
          <td
               style={{
                    display: "flex",
                    flexDirection: "column",
                    // border: "2px solid red",
                    padding: "5px",
                    gap: 5,
                    fontSize: "10px"
               }}>
               <span
                    style={{
                         display: "flex",
                         gap: 20
                    }}>
                    <span
                         style={{
                              width: "20px"
                         }}>
                         <img
                              style={{
                                   width: "100%"
                              }}
                              src={home.logo}
                              alt=""
                         />
                    </span>
                    <span>{home.name}</span>
               </span>

               <span
                    style={{
                         display: "flex",
                         gap: 20
                    }}>
                    <span
                         style={{
                              width: "20px"
                         }}>
                         <img
                              style={{
                                   width: "100%"
                              }}
                              src={away.logo}
                              alt=""
                         />
                    </span>

                    <span>{away.name}</span>
               </span>
          </td>
     );
}
