import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import {
     StyledGoBackButton,
     StyledHeaderContainer,
     StyledLeagueTitle
} from "../../styles/CountriesLeagues.style";

export default function GoBackButton() {
     const { setSelectedCountry, selectedCountry, setSearchWord } =
          useCountryLeagueListContext();

     function handleClick() {
          setSelectedCountry("");
          setSearchWord("");
     }
     return (
          <StyledHeaderContainer>
               <StyledGoBackButton
                    type="button"
                    onClick={handleClick}
               >
                    &lt;
               </StyledGoBackButton>
               <StyledLeagueTitle>{selectedCountry}</StyledLeagueTitle>
          </StyledHeaderContainer>
     );
}
