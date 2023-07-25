import { Route, Routes } from "react-router-dom";

import Dates from "@/core/MainScoreBoard/components/Dates";
import LeagueInfo from "@/core/MainScoreBoard/components/LeagueInfo";

import { MainScoreBoardProvider } from "./context/MainScoreBoard.context";

export default function MainScoreBoard() {
    return (
        <MainScoreBoardProvider>
            <Dates />
            <Routes>
                <Route
                    path="/*"
                    element={<LeagueInfo />}
                />
                <Route
                    path="/football/:countryName/:leagueName/:leagueId"
                    // path="/football/:countryName/:leagueName/:leagueId"
                    element={
                        <div style={{ gridArea: "PageScores_LeagueInfo" }}>
                            /football/:countryName/:leagueName/:leagueId
                        </div>
                    }
                />
            </Routes>
        </MainScoreBoardProvider>
    );
}
