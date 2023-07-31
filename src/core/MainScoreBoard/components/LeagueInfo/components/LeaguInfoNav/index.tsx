import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { TypeActiveNavLink } from "../../models/TypeActiveNavLink";

const StyledNavLink = styled(NavLink)<{ $isActive: boolean }>`
    color: ${({ $isActive }) => ($isActive ? "var(--logo-sport)" : "black")};
    font-weight: ${({ $isActive }) => $isActive && 600};
    padding: 10px;
    border: 1px solid black;
    display: inline-block;
`;

interface IProps {
    active: TypeActiveNavLink;
    urlPath: string;
    handleNavClick: (clickedNav: TypeActiveNavLink) => void;
}

export default function LeagueInfoNav(props: IProps) {
    const { active, urlPath, handleNavClick } = props;
    return (
        <>
            <StyledNavLink
                onClick={() => handleNavClick("overview")}
                $isActive={active === "overview"}
                to={`${urlPath}/overview`}>
                Overview
            </StyledNavLink>
            <StyledNavLink
                onClick={() => handleNavClick("matches")}
                $isActive={active === "matches"}
                to={`${urlPath}/matches`}>
                Matches
            </StyledNavLink>
            <StyledNavLink
                onClick={() => handleNavClick("table")}
                $isActive={active === "table"}
                to={`${urlPath}/table`}>
                Table
            </StyledNavLink>
        </>
    );
}
