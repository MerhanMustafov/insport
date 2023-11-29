import { useEffect } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { useGetFixturesByDateQuery } from "@/global/redux/rtkq/fixtures";
import { setNewCalendarDate } from "@/global/redux/slices/calendar.slice";
import DateSpecificViewNavigation from "@/components/DateSpecificViewNavigation";
import Image from "@/components/Image";
import {
  getDestructuredDateFromString,
  getFormatedDateYYYYMMDD
} from "@/lib/calendar/calendar.utils";

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
`;

const StyledLeagueFixturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border-radius: 10px;
  overflow-x: hidden;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
`;

const StyledFixtureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5px 10px 5px 10px;
`;
export default function DateSpecificMatchView() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { activeDate, today } = useAppSelector((state) => state.calendar);
  const { activeDay, activeMonth, activeYear } = activeDate;
  const { todayDay, todayMonth, todayYear } = today;

  const {
    data: fixturesData,
    isLoading: isFixturesLoading,
    isFetching: isFixturesFetching,
    isError: isFixturesError
  } = useGetFixturesByDateQuery(getFormatedDateYYYYMMDD(activeYear, activeMonth, activeDay, "-"));
  const isLoading = isFixturesFetching || isFixturesLoading;

  useEffect(() => {
    if (params?.date) {
      const { year, month, day } = getDestructuredDateFromString(params.date, "-");
      dispatch(setNewCalendarDate({ year, month, day }));
      return;
    }
    dispatch(setNewCalendarDate({ year: todayYear, month: todayMonth, day: todayDay }));
  }, [params?.date]);

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
                  <StyledFixtureWrapper>
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
                  </StyledFixtureWrapper>
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
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const StyledStatus = styled.span`
  font-size: 1.6rem;
`;
const StyledTeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
          <Image image={homeLogo} width="24px" height="24px" altText="logo" />
          <StyledTeamName>{homeName}</StyledTeamName>
        </StyledTeamWrapper>

        <StyledTeamWrapper>
          <StyldResult>{awayGoals}</StyldResult>
          <Image image={awayLogo} width="23px" height="20px" altText="logo" />
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
function LeagueInfoFixtureHead({
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
