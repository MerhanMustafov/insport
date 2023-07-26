import { useContext } from "react";

import { MainScoreBoardContext } from "../context/MainScoreBoard.context";

export const useMainScoreBoardContext = () => useContext(MainScoreBoardContext);
