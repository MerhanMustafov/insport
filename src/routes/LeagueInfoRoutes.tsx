import { Route, Routes } from "react-router-dom";

import Fixtures from "@/core/MainScoreBoard/components/LeagueInfo/components/Fixtures/Fixtures";
import Live from "@/core/MainScoreBoard/components/LeagueInfo/components/Live/Live";
import Results from "@/core/MainScoreBoard/components/LeagueInfo/components/Results/Results";
import Standings from "@/core/MainScoreBoard/components/LeagueInfo/components/Standings/Standings";

export default function LeagueInfoRoutes() {
     return (
          <Routes>
               <Route
                    path="/*"
                    element={<Fixtures />}
               ></Route>
               <Route
                    path="/live"
                    element={<Live />}
               ></Route>
               <Route
                    path="/results"
                    element={<Results />}
               ></Route>
               <Route
                    path="/standings"
                    element={<Standings />}
               ></Route>
          </Routes>
     );
}
