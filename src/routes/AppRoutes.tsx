import { Route, Routes } from "react-router-dom";

import PageScores from "@/pages/PageScores";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                element={<PageScores />}
            />
            <Route
                path={"/scores/*"}
                element={<PageScores />}
            />
        </Routes>
    );
}
