import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LANDING } from "@/router/pathConsts";

const StyledLogoWrapper = styled.div`
  grid-area: APP_NAV_LOGO;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.3rem;
  font-size: 3rem;
  padding: 2px 15px;

  &:hover {
    box-shadow: #ffffff 0px 0px 10px -2px;
  }
`;
const StyledWord = styled.span`
  letter-spacing: 0.3rem;
  font-family: "Courier New", Courier, monospace;
`;

const StyledIN = styled(StyledWord)`
  color: #fff;
  font-style: italic;
`;

const StyledSPORT = styled(StyledWord)`
  color: #ff0040;
  font-weight: 600;
`;

export default function AppLogo() {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(LANDING);
  };

  return (
    <StyledLogoWrapper onClick={onLogoClick}>
      <StyledIN>In</StyledIN>
      <StyledSPORT>Sport</StyledSPORT>
    </StyledLogoWrapper>
  );
}
