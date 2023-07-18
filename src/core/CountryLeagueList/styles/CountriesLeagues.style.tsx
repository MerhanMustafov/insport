import styled from "styled-components";

export const StyledContainer = styled("div")`
    grid-area: CountryLeagueList;
    border: 1px solid var(--tx-primary);
    width: max-content;
    max-width: 150px;
    min-width: 150px;
    padding: 10px 5px;
    border-radius: 10px;
`;

export const StyledHeaderContainer = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-bottom: 1px solid var(--tx-primary);
    padding: 5px 0;
`;
export const StyledLeagueTitle = styled("span")`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: var(--font-size-small);
`;
export const StyledGoBackButton = styled("button")`
    border: 1px solid transparent;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        border: 1px solid var(--tx-primary);
    }
`;
export const StyledInputField = styled("input")`
    width: 100%;
    outline: none;
    border: none;
`;
