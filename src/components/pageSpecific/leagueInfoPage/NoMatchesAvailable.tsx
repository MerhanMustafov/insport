import styled from "styled-components";

const StyledNoMatchesAvailable = styled.div`
  margin: 0 auto;
  width: max-content;
  font-size: 2rem;
`;

export default function NoMatchesAvailable() {
  return <StyledNoMatchesAvailable>No matches available</StyledNoMatchesAvailable>;
}
