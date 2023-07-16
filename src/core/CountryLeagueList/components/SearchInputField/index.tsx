import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import {
    StyledHeaderContainer,
    StyledInputField
} from "../../styles/CountriesLeagues.style";

export default function SearchInputField() {
    const { searchWord, handleSerachInputFieldChange } = useCountryLeagueListContext();
    return (
        <StyledHeaderContainer>
            <StyledInputField
                type="text"
                placeholder="search"
                value={searchWord}
                onChange={(e) => handleSerachInputFieldChange(e.target.value)}
            />
        </StyledHeaderContainer>
    );
}
