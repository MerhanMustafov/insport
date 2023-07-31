import { Route, Routes } from "react-router-dom";

import CountryLeagueFixtures from "@/core/MainScoreBoard/components/CountryLeagueFixtures";

// import Dates from "@/core/MainScoreBoard/components/Dates";
import LeagueInfo from "./components/LeagueInfo";
import { MainScoreBoardProvider } from "./context/MainScoreBoard.context";

export default function MainScoreBoard() {
    return (
        <MainScoreBoardProvider>
            {/* <Dates /> */}
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
        </MainScoreBoardProvider>
    );
}
