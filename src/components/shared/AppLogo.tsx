import { useNavigate } from "react-router-dom";
// import { TargetAndTransition, motion } from "framer-motion";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { LANDING } from "@/router/pathConsts";

const StyledLogoWrapper = styled.div<{ $isMobile?: boolean }>`
  grid-area: APP_NAV_LOGO;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0.3rem;
  font-size: ${(props) => (props.$isMobile ? 1.5 : 2.5)}rem;
  padding: 2px 15px;

  &:hover {
    box-shadow: #ffffff 0px 0px 4px -2px;
    border-radius: 5px;
    scale: 1.01;
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

function AppLogo({ isMobile }: { isMobile?: boolean }) {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate(LANDING);
  };

  // const logoAnimationConfig: TargetAndTransition = { opacity: [0, 1], transition: { delay: 0.2 } };

  return (
    <StyledLogoWrapper
      $isMobile={isMobile}
      // as={motion.div}
      // animate={logoAnimationConfig}
      onClick={onLogoClick}
    >
      <StyledIN>In</StyledIN>
      <StyledSPORT>Sport</StyledSPORT>
    </StyledLogoWrapper>
  );
}

export default withScreenSize(AppLogo);
