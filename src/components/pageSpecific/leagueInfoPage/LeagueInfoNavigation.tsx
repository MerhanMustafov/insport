import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigationLeagueInfoLink } from "@/global/hooks/useNavigationLeagueInfoLink";
import { LEAGUES } from "@/router/pathConsts";

const StyledNav = styled.nav`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  padding: 1rem 0.5rem;
  width: 100%;
  border-radius: 1rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 2rem;
`;

const StyledNavLink = styled(Link)`
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
  &.finished {
    border-bottom: 2px solid #ff0040;
  }
  &.live {
    border-bottom: 2px solid #ff0040;
  }
  &.upcoming {
    border-bottom: 2px solid #ff0040;
  }
  &.table {
    border-bottom: 2px solid #ff0040;
  }
`;

export default function LeagueInfoNavigation() {
  const { leagueId, section } = useParams<{ leagueId: string; section: string }>();
  const activeLink = useNavigationLeagueInfoLink({ section });

  return (
    <StyledNav>
      <StyledUl>
        <StyledNavLink to={`${LEAGUES}/${leagueId}/finished`} className={activeLink.finished.cl}>
          Finished
        </StyledNavLink>
        <StyledNavLink to={`${LEAGUES}/${leagueId}/live`} className={activeLink.live.cl}>
          Live
        </StyledNavLink>
        <StyledNavLink to={`${LEAGUES}/${leagueId}/upcoming`} className={activeLink.upcoming.cl}>
          Upcoming
        </StyledNavLink>
        <StyledNavLink to={`${LEAGUES}/${leagueId}/table`} className={activeLink.table.cl}>
          Table
        </StyledNavLink>
      </StyledUl>
    </StyledNav>
  );
}
