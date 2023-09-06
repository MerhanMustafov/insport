import styled from "styled-components";

import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import { StyledHeaderContainer } from "../../../styles/CountriesLeagues.styles";

const StyledContainer = styled(StyledHeaderContainer)``;

const StyledGoBackButton = styled("button")`
    border: 1px solid transparent;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        border: 1px solid var(--tx-primary);
    }
`;

const StyledLeagueTitle = styled("span")`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: var(--font-size-small);
`;

export default function GoBackButton() {
    const { setSelectedCountry, selectedCountry, setSearchWord } =
        useCountryLeagueListContext();

    function handleClick() {
        setSelectedCountry("");
        setSearchWord("");
    }
    return (
        <StyledContainer>
            <StyledGoBackButton
                type="button"
                onClick={handleClick}
            >
                &lt;
            </StyledGoBackButton>
            <StyledLeagueTitle>{selectedCountry}</StyledLeagueTitle>
        </StyledContainer>
    );
}
