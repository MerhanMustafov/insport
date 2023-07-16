import styled from "styled-components";

export const StyledContainerHoverEffect = styled("div")`
    :hover {
        cursor: pointer;
        border: 1px solid var(--tx-primary);
    }
`;
export const StyledContainer = styled("div")`
    border: 1px solid transparent;
    :hover {
        border: none;
    }
    border-radius: 5px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 20px 10px auto;
    grid-template-areas: "country-img . country-name";
    align-items: center;
    padding: 2px;
    margin: 5px 0;
`;
export const StyledImageContainer = styled("div")`
    grid-area: country-img;
    display: flex;
`;
export const StyledImage = styled("img")`
    width: 100%;
`;
export const StyledName = styled("span")`
    grid-area: country-name;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: var(--font-size-mini);
    color: var(--tx-primary);
`;
