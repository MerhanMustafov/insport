import { Route, Routes } from "react-router-dom";

import CountryLeagueFixtures from "@/core/MainScoreBoard/components/CountryLeagueFixtures";
import LeagueInfo from "@/core/MainScoreBoard/components/LeagueInfo";

export default function MainScoreBoardRoutes() {
     return (
          <Routes>
               <Route
                    path="/*"
                    element={<CountryLeagueFixtures />}
               />
               <Route
                    path="/football/:countryName/:leagueName/:leagueId/*"
                    element={<LeagueInfo />}
               />
          </Routes>
     );
}
