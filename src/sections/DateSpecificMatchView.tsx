import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/global/redux/reduxHooks";
import { useGetFixturesByDateQuery } from "@/global/redux/rtkq/fixtures";
import { setNewCalendarDate } from "@/global/redux/slices/calendar.slice";
import DateSpecificViewNavigation from "@/components/DateSpecificViewNavigation";
import LeagueInfoFixtureHead from "@/components/LeagueInfoFixtureHead";
import SingleFixture from "@/components/SingleFixture";
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
                <StyledLeagueFixturesWrapper key={leagueInfo.id}>
                  <LeagueInfoFixtureHead
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
