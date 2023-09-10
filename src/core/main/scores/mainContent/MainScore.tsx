import { MainScoreBoardProvider } from "@/context/MainScoreBoard.context";
import MainScoreBoardRoutes from "@/routes/MainScoreBoardRoutes";

export default function MainScoreBoard() {
    return (
        <MainScoreBoardProvider>
            <MainScoreBoardRoutes />
        </MainScoreBoardProvider>
    );
}
