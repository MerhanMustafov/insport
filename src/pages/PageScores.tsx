import { useEffect } from "react";

import styled from "styled-components";

import CountryLeagueList from "@/core/main/scores/sideNavigation/countryLeagueList/CountryLeagueList";
import { activeLinkObserver } from "@/observers/ActiveLinkObserver";
import PageScoresRoutes from "@/routes/PageScoresRoutes";

const StyledPageScoreContainer = styled("div")`
    margin: 0 auto;
    max-width: var(--max-width-app-content);
    flex-grow: 1;
    width: 100%;
    display: grid;
    grid-template-rows: max-content auto;
    grid-template-columns: max-content 20px auto;
    grid-template-areas: "Scores_Side . Scores_Main";

    box-shadow: 0px 5px 20px 1px gray;
    min-height: 100%;
`;

const StyleScoresSide = styled("div")`
    grid-area: Scores_Side;
`;

const StyleScoresMain = styled("div")`
    grid-area: Scores_Main;
    /* width: 100%; */
    /* overflow: hidden; */
`;
export default function PageScores() {
    useEffect(() => {
        activeLinkObserver.appNav.notify("Scores");
    }, []);

    return (
        <StyledPageScoreContainer>
            <StyleScoresSide>
                <CountryLeagueList />
            </StyleScoresSide>

            <StyleScoresMain>
                <PageScoresRoutes />
            </StyleScoresMain>
        </StyledPageScoreContainer>
    );
}
