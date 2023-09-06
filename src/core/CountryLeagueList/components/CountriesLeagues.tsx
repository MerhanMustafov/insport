import styled from "styled-components";

import { useCountryLeagueListContext } from "@/context/hooks/useContext";

import Countries from "./Countries/Countries";
import GoBackButton from "./GoBackButton/GoBackButton";
import Leagues from "./Leagues/Leagues";
import SearchInputField from "./SearchInputField/SearchinputField";

export const StyledContainer = styled("div")`
    /* border: 1px solid var(--tx-primary); */
    width: max-content;
    max-width: 150px;
    /* min-width: 150px; */
    height: max-content;
    padding: 10px 5px;
    /* border-radius: 10px; */
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
            {selectedCountry ? <GoBackButton /> : <SearchInputField />}
            {selectedCountry ? <Leagues /> : <Countries />}
        </StyledContainer>
    );
}
