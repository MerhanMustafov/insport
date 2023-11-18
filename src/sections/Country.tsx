import styled from "styled-components";

interface CountryProps {
  name: string;
  code?: string;
  flag: string;
  handleCountryClick: (name: string) => void;
}

const StyledCountry = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.3rem;
  gap: 2rem;
  max-width: 130px;
  cursor: pointer;
  &:hover {
    box-shadow: #000000 0px 0px 10px -2px;
    scale: 0.95;
  }
`;

const StyledCountryName = styled.div`
  color: #000000;
  font-size: 1.3rem;
  letter-spacing: 0.05rem;
`;
const StyledImageWrapper = styled.div`
  width: 25px;
  height: 25px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Country({ name, flag, handleCountryClick }: CountryProps) {
  const handleClick = () => {
    handleCountryClick(name);
  };

  return (
    <StyledCountry onClick={handleClick}>
      <StyledCountryName>{name}</StyledCountryName>
      <StyledImageWrapper>
        <StyledImage src={flag} alt={name} />
      </StyledImageWrapper>
    </StyledCountry>
  );
}
