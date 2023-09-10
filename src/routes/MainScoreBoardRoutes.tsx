import { Route, Routes } from "react-router-dom";

// import LeagueInfo from "@/core/MainScoreBoard/components/LeagueInfo";
import AllFixtures from "@/core/main/scores/mainContent/allFixtures/AllFixtures";

export default function MainScoreBoardRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                element={<AllFixtures />}
            />
            {/* <Route
                path="/football/:countryName/:leagueName/:leagueId/*"
                element={<LeagueInfo />}
            /> */}
        </Routes>
    );
}
