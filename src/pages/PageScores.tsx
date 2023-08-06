import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import CountryLeagueList from "@/core/CountryLeagueList";
import MainScoreBoard from "@/core/MainScoreBoard";
import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

const StyledPageScoreContainer = styled("div")`
     margin: 0 auto;
     max-width: var(--max-width-app-content);
     flex-grow: 1;
     width: 100%;
     display: grid;
     grid-template-rows: auto;
     grid-template-columns: max-content 20px auto;
     grid-template-areas: "Soccer_Side . Soccer_Main";

     box-shadow: 0px 5px 20px 1px gray;
     min-height: 100%;
`;

const StyleSoccerSide = styled("div")`
     grid-area: Soccer_Side;
`;

const StyleSoccerMain = styled("div")`
     grid-area: Soccer_Main;
     /* width: 100%; */
     /* overflow: hidden; */
`;
export default function PageScores() {
     useEffect(() => {
          activeLinkObserver.appNav.notify("Scores");
     }, []);

     return (
          <StyledPageScoreContainer>
               <StyleSoccerSide>
                    <CountryLeagueList />
               </StyleSoccerSide>

               <StyleSoccerMain>
                    <Routes>
                         <Route
                              path="/*"
                              // path="/football/:countryName/:leagueName/:leagueId"
                              element={<MainScoreBoard />}
                         />
                    </Routes>
               </StyleSoccerMain>
          </StyledPageScoreContainer>
     );
}
