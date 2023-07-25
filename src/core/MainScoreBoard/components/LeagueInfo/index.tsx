import { useParams } from "react-router-dom";

import styled from "styled-components";

const StyledContainer = styled("div")`
    grid-area: PageScores_LeagueInfo;
`;

export default function LeagueInfo() {
    const params = useParams();

    console.log(params);

    return (
        <StyledContainer>
            <div>LeagueInfo</div>
        </StyledContainer>
    );
}
