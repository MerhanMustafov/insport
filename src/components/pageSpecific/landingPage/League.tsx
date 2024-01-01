import styled from "styled-components";
import { LEAGUES } from "@/router/pathConsts";

// import Image from "@/components/shared/Image";

interface LeagueProps {
  id: number;
  name: string;
  logo: string;
  handleLeagueClick: (path: string) => void;
}

const StyledLeague = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  gap: 10px;
  max-width: 150px;
  min-width: 110px;
  cursor: pointer;
  &:hover {
    box-shadow: #000000 0px 0px 10px -2px;
    scale: 0.97;
    border-radius: 10px;
  }
`;

const StyledLeagueName = styled.div`
  color: #000000;
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
`;

export default function League({ id, name, logo, handleLeagueClick }: LeagueProps) {
  const handleClick = () => {
    const path = `${LEAGUES}/${id}/table`;
    handleLeagueClick(path);
  };

  return (
    <StyledLeague onClick={handleClick}>
      <StyledLeagueName>{name}</StyledLeagueName>
      {/* <Image image={logo} /> */}
    </StyledLeague>
  );
}
