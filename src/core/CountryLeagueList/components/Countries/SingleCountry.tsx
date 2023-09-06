import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import {
    StyledImage,
    StyledImageContainer,
    StyledLeagueOrCountryContainer,
    StyledName
} from "../../styles/SingleItem.style";

interface IProps {
    code: string;
    flag: string;
    name: string;
}

export default function SingleCountry(props: IProps) {
    const { flag, name } = props;
    const { setSelectedCountry } = useCountryLeagueListContext();
    return (
        <StyledLeagueOrCountryContainer onClick={() => setSelectedCountry(name)}>
            <StyledImageContainer>
                <StyledImage
                    src={flag}
                    alt={`${name}: flag`}
                />
            </StyledImageContainer>
            <StyledName>{name}</StyledName>
        </StyledLeagueOrCountryContainer>
    );
}
