import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { TAppNavLinks } from "@/models/links/IAppNavLinks";

interface IIsActive {
    $isActive: boolean;
}
const StyledLinkContainer = styled("li")<IIsActive>`
    padding: 10px 15px;
    margin: 5px;

    border-bottom: ${({ $isActive }) =>
        $isActive ? "2px solid var(--logo-sport)" : null};
`;
const StyledLink = styled("div")`
    font-size: var(--font-size-medium);
    color: var(--nav-tx);
    font-weight: 600;
    cursor: pointer;
`;

interface IProps {
    labelTxt: TAppNavLinks;
    isActive: boolean;
    navPath: string;
}

export default function AppSingleNavLink(props: IProps) {
    const { labelTxt, isActive, navPath } = props;
    const navigate = useNavigate();

    function linkClickHandler() {
        navigate(navPath);
    }

    return (
        <StyledLinkContainer
            onClick={linkClickHandler}
            $isActive={isActive}
        >
            <StyledLink>{labelTxt}</StyledLink>
        </StyledLinkContainer>
    );
}
