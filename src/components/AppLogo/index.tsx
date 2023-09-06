import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { urlPaths } from "@/routes/urlPaths";

const StyledLogoContainer = styled("div")`
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
`;
const StyledLogo = styled("span")`
    font-size: var(--font-size-big);
    font-weight: 600;
`;
const StyledLogoIN = styled(StyledLogo)`
    font-style: italic;
    color: var(--logo-in);
`;
const StyledLogoSPORT = styled(StyledLogo)`
    color: var(--logo-sport);
`;
export default function AppLogo() {
    const navigate = useNavigate();

    function handleNavigateHome() {
        navigate(urlPaths.HOME);
    }
    return (
        <StyledLogoContainer onClick={handleNavigateHome}>
            <StyledLogoIN>In</StyledLogoIN>
            <StyledLogoSPORT>Sport</StyledLogoSPORT>
        </StyledLogoContainer>
    );
}
