import styled from "styled-components";

const StyledBodyCell = styled("td")`
     padding: var(--table-row-padding);
     text-align: center;
`;

interface IProps {
     homeTeamScore: number;
     awayTeamScore: number;
}

export default function TableBodyCellResults(props: IProps) {
     const { homeTeamScore, awayTeamScore } = props;
     return (
          <StyledBodyCell>
               <div
                    style={{
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "space-between",
                         gap: 10
                    }}
               >
                    <span>{homeTeamScore}</span>
                    <span>{awayTeamScore}</span>
               </div>
          </StyledBodyCell>
     );
}
