import styled from "styled-components";

import { IFixture } from "../../models/index";
import SingleFixture from "../SingleFixture";

const StyledCountryFixtureContainer = styled("div")`
    border: 7px solid red;
`;
interface IProps {
    countryName: string;
    fixtures: IFixture[];
}

export default function CountryFixtureWrapper(props: IProps) {
    const { countryName, fixtures } = props;

    return (
        <StyledCountryFixtureContainer>
            <h1>{countryName}</h1>
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
        </StyledCountryFixtureContainer>
    );
}
