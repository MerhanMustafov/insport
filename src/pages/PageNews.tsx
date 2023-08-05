import { useEffect } from "react";

import styled from "styled-components";

import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

const StyledPageNewsContainer = styled("div")`
     border: 2px solid blue;
     margin: 0 auto;
     max-width: var(--max-width-app-content);
     flex-grow: 1;
     width: 100%;
     display: grid;
     grid-template-rows: auto;
     grid-template-columns: max-content 20px auto;
     grid-template-areas: "Soccer_Side . Soccer_Main";

     box-shadow: 0px 5px 20px 1px gray;
     min-height: 100%;
`;

export default function PageNews() {
     useEffect(() => {
          activeLinkObserver.appNav.notify("News");
     }, []);
     return (
          <StyledPageNewsContainer>
               <div>This Page is in Maintenance</div>
          </StyledPageNewsContainer>
     );
}
