import styled from "styled-components";

import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import GoBackButton from "./head/GoBackButton/GoBackButton";
import SearchInputField from "./head/SearchInputField/SearchinputField";
import Countries from "./main/Countries/Countries";
import Leagues from "./main/Leagues/Leagues";

export const StyledContainer = styled("div")`
    /* border: 1px solid var(--tx-primary); */
    width: max-content;
    max-width: 150px;
    height: max-content;
    padding: 10px 5px;
    margin: 20px 0 0 10px;
    box-shadow: 0px 0px 10px 1px gray;
    position: sticky;
    top: 0px;
    max-height: 80vh;
    overflow-y: scroll;
`;

export default function CountriesLeagues() {
    const { selectedCountry } = useCountryLeagueListContext();

    return (
        <StyledContainer>
            {/* Head Part */}
            {selectedCountry ? <GoBackButton /> : <SearchInputField />}
            {/* Main part */}
            {selectedCountry ? <Leagues /> : <Countries />}
        </StyledContainer>
    );
}
