import { Route, Routes } from "react-router-dom";

import MainScoreBoard from "@/core/MainScoreBoard";

export default function PageScoresRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                // path="/football/:countryName/:leagueName/:leagueId"
                element={<MainScoreBoard />}
            />
        </Routes>
    );
}
