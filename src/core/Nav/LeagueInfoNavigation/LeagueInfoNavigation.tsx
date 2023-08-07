import styled from "styled-components";

interface IIsActive {
     $isActive: boolean;
}
const StyledNavContainer = styled("nav")`
     display: flex;
     width: auto;
`;

const StyledNavigationMainContentContainer = styled("ul")`
     display: grid;
     grid-template-rows: auto;
     grid-template-columns: max-content 30px max-content 30px max-content 30px max-content auto;
     grid-template-areas: "LeagueInfo_Navigation_Live . LeagueInfo_Navigation_Fixtures . LeagueInfo_Navigation_Results . LeagueInfo_Navigation_Standings .";
     background: rgba(0, 30, 30, 1);
     justify-content: center;
     width: 100%;
`;

const StyledLinkContainer = styled("li")`
     padding: 5px 10px;
     margin: 1px;
     color: #ffd500;
     border-bottom: 2px solid transparent;
     &:hover {
          border-bottom: 2px solid var(--logo-sport);
     }
`;

const StyledLinkContainerFixtures = styled(StyledLinkContainer)`
     grid-area: LeagueInfo_Navigation_Fixtures;
`;
const StyledLinkContainerLive = styled(StyledLinkContainer)`
     grid-area: LeagueInfo_Navigation_Live;
`;
const StyledLinkContainerResults = styled(StyledLinkContainer)`
     grid-area: LeagueInfo_Navigation_Results;
`;
const StyledLinkContainerStandings = styled(StyledLinkContainer)`
     grid-area: LeagueInfo_Navigation_Standings;
`;
const StyledLink = styled("div")`
     font-size: clamp(0.9rem, 1vw, 1.5rem);
     font-weight: 600;
     cursor: pointer;
`;

export default function LeagueInfoNavigation() {
     return (
          <StyledNavContainer>
               <StyledNavigationMainContentContainer>
                    <StyledLinkContainerLive>
                         <StyledLink>Live</StyledLink>
                    </StyledLinkContainerLive>
                    <StyledLinkContainerFixtures>
                         <StyledLink>Fixtures</StyledLink>
                    </StyledLinkContainerFixtures>

                    <StyledLinkContainerResults>
                         <StyledLink>Results</StyledLink>
                    </StyledLinkContainerResults>
                    <StyledLinkContainerStandings>
                         <StyledLink>Standings</StyledLink>
                    </StyledLinkContainerStandings>
               </StyledNavigationMainContentContainer>
          </StyledNavContainer>
     );
}
