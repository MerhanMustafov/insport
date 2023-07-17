import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import CountryLeagueList from "@/core/CountryLeagueList";
import LeagueInfo from "@/core/LeagueInfo";

const StyledPageScoreContainer = styled("div")`
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-app-content);
    flex-grow: 1;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: max-content 20px auto;
    grid-template-areas: "CountryLeagueList . LeagueInfo";
`;

export default function PageScores() {
    return (
        <>
            <StyledPageScoreContainer>
                <CountryLeagueList />
                <Routes>
                    <Route
                        path="/football/:countryName/:leagueName"
                        element={<LeagueInfo />}
                    />
                </Routes>
            </StyledPageScoreContainer>
        </>
    );
}
