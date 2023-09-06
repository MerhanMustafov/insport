import MainScoreBoardRoutes from "@/routes/MainScoreBoardRoutes";

import { MainScoreBoardProvider } from "./context/MainScoreBoard.context";

export default function MainScoreBoard() {
    return (
        <MainScoreBoardProvider>
            <MainScoreBoardRoutes />
        </MainScoreBoardProvider>
    );
}
