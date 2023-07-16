import styled from "styled-components";

import CountryLeagueList from "@/core/CountryLeagueList";

const StyledPageScoreContainer = styled("div")`
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-app-content);
    flex-grow: 1;
`;

export default function PageScores() {
    return (
        <>
            <StyledPageScoreContainer>
                Page SCORES
                <CountryLeagueList />
            </StyledPageScoreContainer>
        </>
    );
}
