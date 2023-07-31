import { Route, Routes } from "react-router-dom";

import Matches from "../components/Matches";

export default function LeagueInfoRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<div> OVERVIEW </div>}
            />
            <Route
                path="/overview"
                element={<div> OVERVIEW </div>}
            />
            <Route
                path="/matches"
                element={<Matches />}
            />
            <Route
                path="/table"
                element={<div> Table </div>}
            />
        </Routes>
    );
}
