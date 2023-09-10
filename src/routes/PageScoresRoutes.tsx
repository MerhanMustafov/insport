import { Route, Routes } from "react-router-dom";

import MainScore from "@/core/main/scores/mainContent/MainScore";

export default function PageScoresRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                element={<MainScore />}
            />
        </Routes>
    );
}
