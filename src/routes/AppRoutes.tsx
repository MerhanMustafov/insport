import { Route, Routes } from "react-router-dom";

import PageScores from "@/pages/PageScores";
import { routePaths } from "@/routes/routePaths";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                element={<PageScores />}
            />
            <Route
                path={routePaths.SCORES}
                element={<PageScores />}
            />
        </Routes>
    );
}
