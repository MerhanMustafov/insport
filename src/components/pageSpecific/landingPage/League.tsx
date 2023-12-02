import styled from "styled-components";
import Image from "@/components/shared/Image";

interface LeagueProps {
  name: string;
  logo: string;
  handleLeagueClick: () => void;
}

const StyledLeague = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1px 5px;
  gap: 10px;
  max-width: 150px;
  min-width: 150px;
  cursor: pointer;
  &:hover {
    box-shadow: #000000 0px 0px 10px -2px;
    scale: 0.95;
  }
`;

const StyledLeagueName = styled.div`
  color: #000000;
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
`;

export default function League({ name, logo, handleLeagueClick }: LeagueProps) {
  const handleClick = () => {
    handleLeagueClick();
  };
  return (
    <StyledLeague onClick={handleClick}>
      <StyledLeagueName>{name}</StyledLeagueName>
      <Image image={logo} />
    </StyledLeague>
  );
}
