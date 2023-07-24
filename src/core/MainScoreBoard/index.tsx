import Dates from "@/core/MainScoreBoard/Dates";
import LeagueInfo from "@/core/MainScoreBoard/LeagueInfo";

import { MainScoreBoardProvider } from "./context/MainScoreBoard.context";

export default function MainScoreBoard() {
    return (
        <MainScoreBoardProvider>
            <Dates />
            <LeagueInfo />
        </MainScoreBoardProvider>
    );
}
