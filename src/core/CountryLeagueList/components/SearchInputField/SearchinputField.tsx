import styled from "styled-components";

import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import { StyledHeaderContainer } from "../../styles/CountriesLeagues.styles";

const StyledInputField = styled("input")`
    width: 100%;
    outline: none;
    border: none;
`;

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
