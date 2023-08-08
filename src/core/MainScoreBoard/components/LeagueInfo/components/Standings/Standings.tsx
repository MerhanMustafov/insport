import { useEffect } from "react";

import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

export default function Standings() {
     useEffect(() => {
          activeLinkObserver.leagueInfoNav.notify("Standings");
     }, []);
     return (
          <div>
               <div>Standings</div>
          </div>
     );
}
