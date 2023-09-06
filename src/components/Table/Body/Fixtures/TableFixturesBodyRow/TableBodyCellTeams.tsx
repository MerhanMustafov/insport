import styled from "styled-components";

const StyledCell = styled("td")`
    display: flex;
    flex-direction: column;
    padding: var(--table-row-padding);
    gap: 3px;
    font-size: clamp(0.7rem, 1.5vw, 1.2rem);
`;

const StyledTeamContainer = styled("div")`
    display: flex;
    gap: 10px;
    align-items: center;
`;
const StyledTeam = styled("span")`
    text-align: center;
`;
const StyledImageContainer = styled("div")`
    width: 20px;
`;
const StyledImage = styled("img")`
    width: 100%;
`;

interface ITeamsCellProps {
    home: {
        name: string;
        logo: string;
    };
    away: {
        name: string;
        logo: string;
    };
}

export default function TableBodyCellTeams(props: ITeamsCellProps) {
    const { away, home } = props;

    return (
        <StyledCell>
            <StyledTeamContainer>
                <StyledImageContainer>
                    <StyledImage
                        src={home.logo}
                        alt="home team logo"
                    />
                </StyledImageContainer>
                <StyledTeam>{home.name}</StyledTeam>
            </StyledTeamContainer>

            <StyledTeamContainer>
                <StyledImageContainer>
                    <StyledImage
                        src={away.logo}
                        alt="away team logo"
                    />
                </StyledImageContainer>

                <StyledTeam>{away.name}</StyledTeam>
            </StyledTeamContainer>
        </StyledCell>
    );
}
