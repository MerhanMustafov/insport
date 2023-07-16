import { useCountriesLeaguesContext } from "../../hooks/useCountriesLeaguesContext";
import {
    StyledContainer,
    StyledContainerHoverEffect,
    StyledImage,
    StyledImageContainer,
    StyledName
} from "../../styles/SingleItem.style";

interface IProps {
    code: string;
    flag: string;
    name: string;
}

export default function SingleCountry(props: IProps) {
    const { flag, name } = props;
    const { handleCountrySelection } = useCountriesLeaguesContext();
    return (
        <StyledContainerHoverEffect>
            <StyledContainer onClick={() => handleCountrySelection(name)}>
                <StyledImageContainer>
                    <StyledImage
                        src={flag}
                        alt={`${name}: flag`}
                    />
                </StyledImageContainer>
                <StyledName>{name}</StyledName>
            </StyledContainer>
        </StyledContainerHoverEffect>
    );
}
