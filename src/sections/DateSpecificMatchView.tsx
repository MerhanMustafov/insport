import { TfiAngleRight } from "react-icons/tfi";
import styled from "styled-components";
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

const StyledLeagueFixturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export default function DateSpecificMatchView() {
  const {
    data: fixturesData,
    isLoading: isFixturesLoading,
    isError: isFixturesError
  } = useGetFixturesByDateQuery("2023-11-26");
  if (fixturesData) {
    console.log(fixturesData);
  }

  if (isFixturesLoading) return <div>Loading...</div>;

  return (
    <StyledWrapper>
      <DateSpecificViewNavigation />
      {/* {Object.values(fixturesData).forEach((arr) => {
        arr.map((d) => <div>{d?.league?.country}</div>);
      })} */}
      {/* {fixturesData &&
        Object.values(fixturesData).map((d) => (
          <div style={{ width: "100%" }}>
            {.map((x) => (
              <>
                <SingleFixture status={x.fixture.status.short} teams={x.teams} goals={x.goals} />
              </>
            ))}
          </div>
        ))} */}
      {/* <StyledLeagueFixturesWrapper>
        <LeagueInfoFixtureHead />
        <SingleFixture />
        <SingleFixture />
        <SingleFixture />
        <SingleFixture />
        <SingleFixture />
        <SingleFixture />
      </StyledLeagueFixturesWrapper> */}
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
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  /* border: 1px solid black; */
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
}

function SingleFixture({
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
            altText="Manchester United Logo"
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
            altText="Manchester United Logo"
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
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
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

function LeagueInfoFixtureHead() {
  return (
    <StyledBlockHeaderWrapper>
      <StyledLeftWrapper>
        <Image
          image="https://dorve.com/wp-content/uploads/2023/08/premierleague-1024x1024.png"
          width="50px"
          height="50px"
          altText="Premier League Logo"
        />
        <StyledLeagueCountryTextWrapper>
          <StyledLeagueName>Premier League</StyledLeagueName>
          <StyledCountryName>England</StyledCountryName>
        </StyledLeagueCountryTextWrapper>
      </StyledLeftWrapper>

      <StyledRightWrapper>
        <StyledArrowRight />
      </StyledRightWrapper>
    </StyledBlockHeaderWrapper>
  );
}
