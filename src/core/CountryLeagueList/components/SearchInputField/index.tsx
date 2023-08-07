import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import {
     StyledHeaderContainer,
     StyledInputField
} from "../../styles/CountriesLeagues.style";

export default function SearchInputField() {
     const { searchWord, setSearchWord } = useCountryLeagueListContext();
     return (
          <StyledHeaderContainer
               style={{ position: "sticky", top: "-10px", background: "white" }}
          >
               <StyledInputField
                    type="text"
                    placeholder="search"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
               />
          </StyledHeaderContainer>
     );
}
