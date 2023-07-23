import styled from "styled-components";

// import LeagueInfoHeader from "./components/LeagueInfoHeader";

const StyledContainer = styled("div")`
    grid-area: LeagueInfo;
    border: 2px solid blue;
    max-height: max-content;
`;

// interface IData {
//     league: {
//         country: string;
//         flag: string;
//         id: number;
//         logo: string;
//         name: string;
//         season: number;
//         standing: { points: number; team: { id: number; logo: string; name: string } };
//     };
// }

export default function LeagueInfo() {
    return <StyledContainer>LeagueInfo Component</StyledContainer>;
}
