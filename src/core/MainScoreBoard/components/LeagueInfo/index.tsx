import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import LeagueInfoNavigation from "@/core/Nav/LeagueInfoNavigation/LeagueInfoNavigation";

import Fixtures from "./components/Fixtures/Fixtures";
import Live from "./components/Live/Live";
import Results from "./components/Results/Results";
import Standings from "./components/Standings/Standings";

export default function LeagueInfo() {
     const params = useParams();

     console.log(params);

     return (
          <>
               <LeagueInfoNavigation />
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
          </>
     );
}
