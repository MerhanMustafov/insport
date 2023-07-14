import styled from "styled-components";

const StyledLogoContainer = styled("div")`
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    grid-area: logo;
    padding: 10px;
    margin-left: 20px;
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
    return (
        <StyledLogoContainer>
            <StyledLogoIN>In</StyledLogoIN>
            <StyledLogoSPORT>Sport</StyledLogoSPORT>
        </StyledLogoContainer>
    );
}
