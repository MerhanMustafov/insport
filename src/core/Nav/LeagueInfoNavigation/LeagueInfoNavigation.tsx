import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import { TLeagueInfoNavLinks } from "@/models/links/ILeagueInfoNavLinks";
import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

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

const StyledLinkContainer = styled("li")<IIsActive>`
     padding: 5px 10px;
     margin: 1px;
     color: #ffffff;
     border-bottom: ${({ $isActive }) =>
          $isActive ? "2px solid var(--logo-sport)" : "2px solid transparent"};
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
     const [activeLink, setActiveLink] = useState<TLeagueInfoNavLinks>("Fixtures");
     const navigate = useNavigate();
     const params = useParams();

     activeLinkObserver.leagueInfoNav.subscribe(subscriber);
     function subscriber(activeLink: TLeagueInfoNavLinks) {
          setActiveLink(activeLink);
     }
     function linkClickHandler(e: React.MouseEvent) {
          const navPath = (e.target as HTMLElement).innerText.toLowerCase();
          navigate(
               `/football/${params.countryName as string}/${
                    params.leagueName as string
               }/${params.leagueId as string}/` + navPath
          );
     }
     return (
          <StyledNavContainer>
               <StyledNavigationMainContentContainer>
                    <StyledLinkContainerLive
                         onClick={linkClickHandler}
                         $isActive={activeLink === "Live"}
                    >
                         <StyledLink>Live</StyledLink>
                    </StyledLinkContainerLive>
                    <StyledLinkContainerFixtures
                         onClick={linkClickHandler}
                         $isActive={activeLink === "Fixtures"}
                    >
                         <StyledLink>Fixtures</StyledLink>
                    </StyledLinkContainerFixtures>

                    <StyledLinkContainerResults
                         onClick={linkClickHandler}
                         $isActive={activeLink === "Result"}
                    >
                         <StyledLink>Results</StyledLink>
                    </StyledLinkContainerResults>
                    <StyledLinkContainerStandings
                         onClick={linkClickHandler}
                         $isActive={activeLink === "Standings"}
                    >
                         <StyledLink>Standings</StyledLink>
                    </StyledLinkContainerStandings>
               </StyledNavigationMainContentContainer>
          </StyledNavContainer>
     );
}
