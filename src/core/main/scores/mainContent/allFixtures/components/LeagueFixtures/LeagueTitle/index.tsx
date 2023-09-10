import styled from "styled-components";

const StyledContainer = styled("div")<{ $imageSize: number }>`
    border-bottom: 1px solid black;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 5px ${({ $imageSize }) => $imageSize}px 5px auto;
    grid-template-areas: ". DisplayImageAndName_img . DisplayImageAndName_text";
    align-items: center;
    margin: 10px auto;
    padding: 10px 0;
`;

const StyledImageContainer = styled("div")`
    display: flex;
    grid-area: DisplayImageAndName_img;
`;
const StyledImage = styled("img")`
    width: 100%;
`;

const StyledText = styled("div")<{ $fontSize: number }>`
    grid-area: DisplayImageAndName_text;
    color: black;
    font-size: ${({ $fontSize }) => $fontSize}px;
    font-weight: 600;
`;
type SizeType = "small" | "medium" | "big" | "large";

const styleConfig = {
    small: {
        $fontSize: 10,
        $imageSize: 20
    },
    medium: {
        $fontSize: 13,
        $imageSize: 25
    },
    big: {
        $fontSize: 17,
        $imageSize: 30
    },
    large: {
        $fontSize: 20,
        $imageSize: 35
    }
};

interface IProps {
    sizeType: SizeType;
    title: string;
    image: string;
}
export default function LeagueTitle(props: IProps) {
    const { sizeType, image, title } = props;
    return (
        <StyledContainer $imageSize={styleConfig[sizeType].$imageSize}>
            <StyledImageContainer>
                <StyledImage
                    src={image}
                    alt="country flag"
                />
            </StyledImageContainer>
            <StyledText $fontSize={styleConfig[sizeType].$fontSize}>{title}</StyledText>
        </StyledContainer>
    );
}
