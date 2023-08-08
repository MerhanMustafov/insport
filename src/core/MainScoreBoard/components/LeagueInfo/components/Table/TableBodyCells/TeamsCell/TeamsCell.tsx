import styled from "styled-components";

const StyledCell = styled("td")`
     display: flex;
     flex-direction: column;
     padding: 5px;
     gap: 5;
     font-size: clamp(0.7rem, 1.5vw, 1.2rem);
`;

const StyledTeamContainer = styled("div")`
     display: flex;
     gap: 20;
`;
const StyledTeam = styled("span")``;
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

export default function TeamsCell(props: ITeamsCellProps) {
     const { away, home } = props;

     return (
          <StyledCell>
               <StyledTeamContainer>
                    <StyledImageContainer style={{}}>
                         <StyledImage
                              src={home.logo}
                              alt="home team logo"
                         />
                    </StyledImageContainer>
                    <StyledTeam>{home.name}</StyledTeam>
               </StyledTeamContainer>

               <StyledTeamContainer>
                    <StyledImageContainer style={{}}>
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
