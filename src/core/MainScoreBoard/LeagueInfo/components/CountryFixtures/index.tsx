import styled from "styled-components";

import { IFixture } from "../../models/index";
import LeagueFixtures from "../LeagueFixtures";

const StyledCountryFixtureContainer = styled("div")`
    /* border: 7px solid red; */
`;
interface IProps {
    countryName: string;
    fixtures: IFixture[];
}

export default function CountryFixtures(props: IProps) {
    const { countryName, fixtures } = props;

    const transformedFixtures = fixtures.reduce(
        (acc: { [K: string]: IFixture[] }, curr) => {
            if (acc[curr.league.name]) {
                return {
                    ...acc,
                    [curr.league.name]: [...acc[curr.league.name], curr]
                };
            }
            return { ...acc, [curr.league.name]: [curr] };
        },
        {}
    );
    console.log("transformedFixtures: ", transformedFixtures);
    // console.log("fixtures: ", fixtures);

    return (
        <StyledCountryFixtureContainer>
            <h1>{countryName}</h1>

            {fixtures &&
                transformedFixtures &&
                Object.entries(transformedFixtures)?.map(
                    ([leagueTitle, fixtures], index: number) => (
                        <LeagueFixtures
                            key={`${leagueTitle}-${index}`}
                            fixtures={fixtures}
                            leagueTitle={leagueTitle}
                        />
                    )
                )}
        </StyledCountryFixtureContainer>
    );
}
