import styled from "styled-components";
import { useAppSelector } from "@/global/redux/reduxHooks";
import { useGetLeagueFixturesByStatusQuery } from "@/global/redux/rtkq/leagues";
import SingleFixture from "@/components/pageSpecific/landingPage/SingleFixture";
import NoMatchesAvailable from "@/components/pageSpecific/leagueInfoPage/NoMatchesAvailable";

const StyledFixtureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5px 10px 5px 10px;
`;

export default function FixtureContainerByStatus({
  status,
  leagueId
}: {
  status: string;
  leagueId: string;
}) {
  const { todayYear } = useAppSelector((state) => state.calendar.today);
  const {
    data: leagueDataByStatus,
    isLoading: leagueDataByStatusLoading,
    isError: leagueDataByStatusError
  } = useGetLeagueFixturesByStatusQuery({
    leagueId: Number(leagueId) as number,
    season: todayYear,
    status: status
  });

  if (leagueDataByStatusLoading) return <div>Loading...</div>;
  if (leagueDataByStatusError) return <div>Error...</div>;
  if (leagueDataByStatus?.length === 0) return <NoMatchesAvailable />;

  return (
    <StyledFixtureWrapper>
      {leagueDataByStatus?.map((leaguFuxtureData) => {
        const matchDate = new Date(leaguFuxtureData.fixture.date);
        const matchTime = `${matchDate.getUTCHours()}:${
          matchDate.getUTCMinutes() < 10
            ? `0${matchDate.getUTCMinutes()}`
            : matchDate.getUTCMinutes()
        }`;

        return (
          <SingleFixture
            key={leaguFuxtureData.fixture.id}
            fixtureId={leaguFuxtureData.fixture.id}
            teams={leaguFuxtureData.teams}
            status={leaguFuxtureData.fixture.status}
            goals={leaguFuxtureData.goals}
            matchTime={matchTime}
          />
        );
      })}
    </StyledFixtureWrapper>
  );
}
