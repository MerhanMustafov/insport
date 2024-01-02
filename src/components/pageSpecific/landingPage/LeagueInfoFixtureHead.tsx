import { TfiAngleRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import withScreenSize from "@/global/hoc/withScreenSize";
import { LEAGUES } from "@/router/pathConsts";

const StyledBlockHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.6rem;
  border-radius: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const StyledLeagueName = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1.2 : 1.4)}rem;
`;

const StyledCountryName = styled.span<{ $isMobile?: boolean }>`
  font-size: ${(props) => (props.$isMobile ? 1 : 1.2)}rem;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`;
const StyledRightWrapper = styled.div``;

const StyledLeagueCountryTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledArrowRight = styled(TfiAngleRight)<{ $isMobile?: boolean }>`
  cursor: pointer;
  font-size: ${(props) => (props.$isMobile ? 1.2 : 1.4)}rem;
  margin-right: 1rem;
`;

interface LeagueInfoFixtureHeadProps {
  leagueName: string;
  countryName: string;
  leagueLogo: string;
  leagueId: number;
  isMobile?: boolean;
}
function LeagueInfoFixtureHead({
  leagueId,
  countryName,
  leagueName, // leagueLogo
  isMobile
}: LeagueInfoFixtureHeadProps) {
  const navigate = useNavigate();

  const onLeagueInfoClick = () => {
    navigate(`${LEAGUES}/${leagueId}/table`);
  };
  return (
    <StyledBlockHeaderWrapper onClick={onLeagueInfoClick}>
      <StyledLeftWrapper>
        {/* <Image image={leagueLogo} width="30px" height="33px" altText="logo" /> */}
        <StyledLeagueCountryTextWrapper>
          <StyledLeagueName $isMobile={isMobile}>{leagueName}</StyledLeagueName>
          <StyledCountryName $isMobile={isMobile}>{countryName}</StyledCountryName>
        </StyledLeagueCountryTextWrapper>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <StyledArrowRight />
      </StyledRightWrapper>
    </StyledBlockHeaderWrapper>
  );
}

export default withScreenSize(LeagueInfoFixtureHead);
