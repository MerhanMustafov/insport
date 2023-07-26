import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import CountryLeagueList from "@/core/CountryLeagueList";
import MainScoreBoard from "@/core/MainScoreBoard";

const StyledPageScoreContainer = styled("div")`
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-app-content);
    flex-grow: 1;

    display: grid;
    grid-template-rows: max-content auto;
    grid-template-columns: max-content 20px auto;
    grid-template-areas:
        "PageScores_CountryLeagueList . PageScores_Dates"
        "PageScores_CountryLeagueList . PageScores_LeagueInfo"
        "PageScores_CountryLeagueList . .";
`;

export default function PageScores() {
    return (
        <StyledPageScoreContainer>
            <CountryLeagueList />
            <Routes>
                <Route
                    path="/*"
                    // path="/football/:countryName/:leagueName/:leagueId"
                    element={<MainScoreBoard />}
                />
            </Routes>
        </StyledPageScoreContainer>
    );
}
