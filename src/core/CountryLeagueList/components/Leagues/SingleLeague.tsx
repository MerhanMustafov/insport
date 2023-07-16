import { ILeague } from "@/models/api";

import {
    StyledContainer,
    StyledContainerHoverEffect,
    StyledImage,
    StyledImageContainer,
    StyledName
} from "../../styles/SingleItem.style";

type IProps = ILeague;

export default function SingleLeague(props: IProps) {
    const { id, logo, name } = props;

    return (
        <StyledContainerHoverEffect>
            <StyledContainer id={JSON.stringify(id)}>
                <StyledImageContainer>
                    <StyledImage
                        src={logo}
                        alt={`${name} logo`}
                    />
                </StyledImageContainer>
                <StyledName>{name}</StyledName>
            </StyledContainer>
        </StyledContainerHoverEffect>
    );
}
