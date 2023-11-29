import { TfiAngleRight } from "react-icons/tfi";
import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";
import { useGetFixturesByDateQuery } from "@/global/redux/rtkq/fixtures";
import DateSpecificViewNavigation from "@/components/DateSpecificViewNavigation";
import Image from "@/components/Image";

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 0px 20px 0 0;
`;
const StyledLeaguesWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  width: 100%;
  /* background: #6e6e6e; */
`;

const StyledLeagueFixturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  /* background: #001e28; */
  background: #ffffff;
  /* border: 3px solid #001e28; */
  padding: 5px;
`;

export default function DateSpecificMatchView() {
  const { activeYear, activeMonth, activeDay } = useAppSelector(
    (state) => state.calendar.activeDate
  );
  const {
    data: fixturesData,
    isLoading: isFixturesLoading,
    isFetching: isFixturesFetching,
    isError: isFixturesError
  } = useGetFixturesByDateQuery(`${activeYear}-${activeMonth}-${activeDay}`);
  const isLoading = isFixturesFetching || isFixturesLoading;

  if (isFixturesError) return <div>Error has occured</div>;

  return (
    <StyledWrapper>
      <DateSpecificViewNavigation />
      <StyledLeaguesWrapper>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          fixturesData &&
          Object.values(fixturesData).map((leagueData) => {
            return Object.values(leagueData).map(({ leagueInfo, leagueData }) => {
              return (
                <StyledLeagueFixturesWrapper>
                  <LeagueInfoFixtureHead
                    key={leagueInfo.id}
                    leagueId={leagueInfo.id}
                    countryName={leagueInfo.country}
                    leagueName={leagueInfo.name}
                    leagueLogo={leagueInfo.logo}
                  />
                  {leagueData.map((leaguFuxtureData) => {
                    return (
                      <SingleFixture
                        key={leaguFuxtureData.fixture.id}
                        fixtureId={leaguFuxtureData.fixture.id}
                        teams={leaguFuxtureData.teams}
                        status={leaguFuxtureData.fixture.status.short}
                        goals={leaguFuxtureData.goals}
                      />
                    );
                  })}
                </StyledLeagueFixturesWrapper>
              );
            });
          })}
      </StyledLeaguesWrapper>
    </StyledWrapper>
  );
}

// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************

const StyledSingleFixture = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: auto;
  column-gap: 2rem;
  align-items: center;
  padding: 0.5rem 1.6rem;
  /* width: 100%; */
  /* margin: 0 0 0 calc(50px + 20px); */
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  /* border-bottom: 1px solid black; */
  /* border: 1px solid black; */
  /* background: #c0bebe; */
`;

const StyledStatus = styled.span`
  font-size: 1.6rem;
  /* border: 1px solid black; */
`;
const StyledTeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  /* border: 1px solid black; */
`;
const StyledTeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StyledTeamName = styled.span`
  font-size: 1.6rem;
`;

const StyldResult = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

interface SingleFixtureProps {
  status: string;
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  fixtureId: number;
}

function SingleFixture({
  fixtureId,
  status,
  teams: {
    home: { name: homeName, logo: homeLogo },
    away: { name: awayName, logo: awayLogo }
  },
  goals: { home: homeGoals, away: awayGoals }
}: SingleFixtureProps) {
  return (
    <StyledSingleFixture>
      <StyledStatus>{status}</StyledStatus>
      <StyledTeamsWrapper>
        <StyledTeamWrapper>
          <StyldResult>{homeGoals}</StyldResult>
          <Image
            // image="https://crests.football-data.org/66.svg"
            image={homeLogo}
            width="20px"
            height="25px"
            altText="logo"
          />
          <StyledTeamName>{homeName}</StyledTeamName>
        </StyledTeamWrapper>

        <StyledTeamWrapper>
          <StyldResult>{awayGoals}</StyldResult>
          <Image
            // image="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
            image={awayLogo}
            width="20px"
            height="25px"
            altText="logo"
          />
          <StyledTeamName>{awayName}</StyledTeamName>
        </StyledTeamWrapper>
      </StyledTeamsWrapper>
    </StyledSingleFixture>
  );
}

// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************
const StyledBlockHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  /* box-shadow: 0px 0px 5px 0px rgb(0, 119, 119); */
  /* width: 100%; */
  padding: 0.5rem 1.6rem;
  background: #001e28;
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
function LeagueInfoFixtureHead({
  leagueId,
  countryName,
  leagueName,
  leagueLogo
}: LeagueInfoFixtureHeadProps) {
  return (
    <StyledBlockHeaderWrapper>
      <StyledLeftWrapper>
        <Image image={leagueLogo} width="20px" height="23px" altText="logo" />
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
