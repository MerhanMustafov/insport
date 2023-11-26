import styled from "styled-components";

interface Props {
  image: string;
  altText?: string;
  width?: string; // // ex: 25px || 2rem || 50%...
  height?: string; // // ex: 25px || 2rem || 50%...
  border?: string; // ex: 1px solid red
}

interface ImageWrapperProps {
  width?: string; // ex: 25px || 2rem || 50%...
  height?: string; // ex: 25px || 2rem || 50%...
  border?: string; // ex: 1px solid red
}

const StyledImageWrapper = styled.div<ImageWrapperProps>`
  width: ${(props) => props.width || "25px"};
  height: ${(props) => props.height || "19px"};
  border: ${(props) => props.border || "none"};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Image({ image, altText, width, height, border }: Props) {
  return (
    <StyledImageWrapper width={width} height={height} border={border}>
      <StyledImage src={image} alt={altText || "image"} />
    </StyledImageWrapper>
  );
}
