import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import styled, { css } from "styled-components";
import { FlexCenter } from "@/styles/reusableStyles";

const StyledCarouselButton = css`
  ${FlexCenter}
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  padding: 3px;
  border-radius: 50%;
  opacity: 0.3;
  transition: all 0.5s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 0px gray;
    opacity: 1;
    scale: 1.1;
  }
`;

const StyledPrevButton = styled.div`
  ${StyledCarouselButton}
  left: 0;
`;

const StyledNextButton = styled.div`
  ${StyledCarouselButton}
  right: 0;
`;

export function CarouselPrevButton() {
  return (
    <StyledPrevButton>
      <MdNavigateBefore />
    </StyledPrevButton>
  );
}

export function CarouselNextButton() {
  return (
    <StyledNextButton>
      <MdNavigateNext />
    </StyledNextButton>
  );
}
