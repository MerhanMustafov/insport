import styled from "styled-components";

import { IFixture } from "../../models/index";

const StyledFixtureContainer = styled("div")`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 10px max-content 10px auto;
    grid-template-areas: ". fixtureTime . teams";
    border: 2px solid black;
    margin: 10px 5px;
    align-items: center;
`;

const StyledFixtureTime = styled("div")`
    display: flex;
    align-self: center;
    grid-area: fixtureTime;
    border: 2px solid green;
`;
const StyledTeamsContainer = styled("div")`
    display: flex;
    flex-direction: column;
    grid-area: teams;
    border: 2px solid black;
`;
const StyledTeamContainer = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
const StyledTeamLogoContainer = styled("div")`
    /* border: 2px solid green; */
    width: 30px;
`;
const StyledTeamLogo = styled("img")`
    /* border: 2px solid green; */
    width: 100%;
`;
const StyledTeamName = styled("div")`
    /* border: 2px solid green; */
`;

export default function SingleFixture(props: IFixture) {
    // const {} = props
    return (
        <>
            <StyledFixtureContainer>
                <StyledFixtureTime>
                    {new Date(props.fixture.date)
                        .toISOString()
                        .split("T")[1]
                        .split(":")
                        .slice(0, 2)
                        .join(":")}
                </StyledFixtureTime>
                <StyledTeamsContainer>
                    <StyledTeamContainer>
                        <StyledTeamLogoContainer>
                            <StyledTeamLogo
                                src={props.teams.home.logo}
                                alt={props.teams.home.name}
                            />
                        </StyledTeamLogoContainer>
                        <StyledTeamName>{props.teams.home.name}</StyledTeamName>
                    </StyledTeamContainer>

                    <StyledTeamContainer>
                        <StyledTeamLogoContainer>
                            <StyledTeamLogo
                                src={props.teams.away.logo}
                                alt={props.teams.away.name}
                            />
                        </StyledTeamLogoContainer>
                        <StyledTeamName>{props.teams.away.name}</StyledTeamName>
                    </StyledTeamContainer>
                </StyledTeamsContainer>
            </StyledFixtureContainer>
        </>
    );
}