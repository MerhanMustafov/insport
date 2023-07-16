import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import {
    StyledGoBackButton,
    StyledHeaderContainer,
    StyledLeagueTitle
} from "../../styles/CountriesLeagues.style";

export default function GoBackButton() {
    const { handleClearSelectedCountry, selectedCountry } = useCountryLeagueListContext();
    return (
        <StyledHeaderContainer>
            <StyledGoBackButton
                type="button"
                onClick={handleClearSelectedCountry}>
                &lt;
            </StyledGoBackButton>
            <StyledLeagueTitle>{selectedCountry}</StyledLeagueTitle>
        </StyledHeaderContainer>
    );
}
