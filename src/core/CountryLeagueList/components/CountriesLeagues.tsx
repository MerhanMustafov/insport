import { useCountryLeagueListContext } from "../hooks/useCountryLeagueListContext";
import { StyledContainer } from "../styles/CountriesLeagues.style";
import Countries from "./Countries";
import Leagues from "./Leagues";

export default function CountriesLeagues() {
    const {
        isLoading,
        searchWord,
        selectedCountry,
        handleClearSelectedCountry,
        handleSerachInputFieldChange
    } = useCountryLeagueListContext();

    return (
        <StyledContainer>
            {selectedCountry ? (
                <div>
                    <button
                        type="button"
                        onClick={handleClearSelectedCountry}>
                        &lt;
                    </button>
                    <div>{selectedCountry}</div>
                </div>
            ) : (
                <div style={{ width: "100%", display: "flex" }}>
                    <input
                        type="text"
                        placeholder="search"
                        style={{ width: "100%" }}
                        value={searchWord}
                        onChange={(e) => handleSerachInputFieldChange(e.target.value)}
                    />
                </div>
            )}
            {isLoading && <div>LOADING ...</div>}
            {!selectedCountry ? <Countries /> : <Leagues />}
        </StyledContainer>
    );
}
