import styled from "styled-components";

export const StyledContainer = styled("div")`
     border: 1px solid transparent;
     &:hover {
          cursor: pointer;
          border: 1px solid var(--tx-primary);
     }
     border-radius: 5px;
     display: grid;
     grid-template-rows: auto;
     grid-template-columns: auto 10px 20px;
     grid-template-areas: "country-name . country-img";
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
