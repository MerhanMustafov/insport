import { useEffect } from "react";

import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

export default function Results() {
     useEffect(() => {
          activeLinkObserver.leagueInfoNav.notify("Result");
     }, []);
     return (
          <div>
               <div>Result</div>
          </div>
     );
}
