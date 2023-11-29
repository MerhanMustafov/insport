import { TfiAngleRight } from "react-icons/tfi";
import styled from "styled-components";
import Image from "@/components/Image";

const StyledBlockHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.6rem;
  border-radius: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
`;

const StyledLeagueName = styled.span`
  font-size: 1.6rem;
`;

const StyledCountryName = styled.span`
  font-size: 1.2rem;
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

const StyledArrowRight = styled(TfiAngleRight)`
  cursor: pointer;
  font-size: 2rem;
  margin-right: 1rem;
`;

interface LeagueInfoFixtureHeadProps {
  leagueName: string;
  countryName: string;
  leagueLogo: string;
  leagueId: number;
}

export default function LeagueInfoFixtureHead({
  leagueId,
  countryName,
  leagueName,
  leagueLogo
}: LeagueInfoFixtureHeadProps) {
  return (
    <StyledBlockHeaderWrapper>
      <StyledLeftWrapper>
        <Image image={leagueLogo} width="30px" height="33px" altText="logo" />
        <StyledLeagueCountryTextWrapper>
          <StyledLeagueName>{leagueName}</StyledLeagueName>
          <StyledCountryName>{countryName}</StyledCountryName>
        </StyledLeagueCountryTextWrapper>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <StyledArrowRight />
      </StyledRightWrapper>
    </StyledBlockHeaderWrapper>
  );
}
