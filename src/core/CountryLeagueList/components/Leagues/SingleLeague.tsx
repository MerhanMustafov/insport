import { ILeague } from "@/models/api";

import {
    StyledContainer,
    StyledImage,
    StyledImageContainer,
    StyledName
} from "../../styles/SingleItem.style";

type IProps = ILeague;

export default function SingleLeague(props: IProps) {
    const { id, logo, name } = props;

    return (
        <StyledContainer id={JSON.stringify(id)}>
            <StyledImageContainer>
                <StyledImage
                    src={logo}
                    alt={`${name} logo`}
                />
            </StyledImageContainer>
            <StyledName>{name}</StyledName>
        </StyledContainer>
    );
}
