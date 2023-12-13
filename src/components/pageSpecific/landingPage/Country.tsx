import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "@/components/shared/Image";

interface CountryProps {
  name: string;
  code?: string;
  flag: string;
  handleCountryClick: (name: string, flag: string) => void;
}

const StyledCountry = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1px 5px;
  gap: 10px;
  max-width: 150px;
  min-width: 110px;
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

export default function Country({ name, flag, handleCountryClick }: CountryProps) {
  const handleClick = () => {
    handleCountryClick(name, flag);
  };

  return (
    <StyledCountry
      onClick={handleClick}
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.1 } }}
    >
      <StyledCountryName>{name}</StyledCountryName>
      <Image image={flag} />
    </StyledCountry>
  );
}
