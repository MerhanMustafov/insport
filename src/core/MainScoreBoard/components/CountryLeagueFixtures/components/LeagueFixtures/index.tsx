import styled from "styled-components";

import { IFixture } from "../../models";
import SingleFixture from "../SingleFixture";
import LeagueTitle from "./LeagueTitle";

const StyledLeagueFixtureContainer = styled("div")`
    padding-left: 50px;
`;
const StyledFixturesContainer = styled("div")`
    padding-left: 50px;
`;

interface IProps {
    leagueTitle: string;
    fixtures: IFixture[];
}
export default function LeagueFixtures(props: IProps) {
    const { leagueTitle, fixtures } = props;
    return (
        <StyledLeagueFixtureContainer>
            <LeagueTitle
                sizeType="medium"
                title={leagueTitle}
                image={fixtures[0].league.logo}
            />
            <StyledFixturesContainer>
                {fixtures &&
                    fixtures?.map((fixture) => (
                        <SingleFixture
                            key={fixture.fixture.id}
                            fixture={fixture.fixture}
                            goals={fixture.goals}
                            league={fixture.league}
                            score={fixture.score}
                            teams={fixture.teams}
                        />
                    ))}
            </StyledFixturesContainer>
        </StyledLeagueFixtureContainer>
    );
}
