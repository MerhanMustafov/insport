import { useCountryLeagueListContext } from "../hooks/useCountryLeagueListContext";
import { StyledContainer } from "../styles/CountriesLeagues.style";
import Countries from "./Countries";
import GoBackButton from "./GoBackButton";
import Leagues from "./Leagues";
import SearchInputField from "./SearchInputField";

export default function CountriesLeagues() {
    const { isLoading, selectedCountry } = useCountryLeagueListContext();

    return (
        <StyledContainer>
            {selectedCountry ? <GoBackButton /> : <SearchInputField />}
            {isLoading && <div>LOADING ...</div>}
            {!selectedCountry ? <Countries /> : <Leagues />}
        </StyledContainer>
    );
}
