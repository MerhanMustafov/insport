import { IFixture } from "../../models";
import SingleFixture from "../SingleFixture";

interface IProps {
    leagueTitle: string;
    fixtures: IFixture[];
}
export default function LeagueFixtures(props: IProps) {
    const { leagueTitle, fixtures } = props;
    return (
        <div>
            <div>{leagueTitle}</div>
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
        </div>
    );
}
