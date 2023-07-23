import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import CountryLeagueList from "@/core/CountryLeagueList";
import Dates from "@/core/Dates";
import LeagueInfo from "@/core/LeagueInfo";

const StyledPageScoreContainer = styled("div")`
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-app-content);
    flex-grow: 1;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: max-content 20px auto;
    grid-template-areas:
        "CountryLeagueList . Dates"
        "CountryLeagueList . LeagueInfo"
        "CountryLeagueList . .";
`;

export default function PageScores() {
    return (
        <>
            <StyledPageScoreContainer>
                <CountryLeagueList />
                <Dates />
                <LeagueInfo />
                {/* <Routes>
                    <Route
                        path="/football/:countryName/:leagueName/:leagueId"
                        element={<LeagueInfo />}
                    />
                </Routes> */}
            </StyledPageScoreContainer>
        </>
    );
}
