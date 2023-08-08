import { useEffect } from "react";

import { activeLinkObserver } from "@/observers/ActiveLinkObserver";

export default function Live() {
     useEffect(() => {
          activeLinkObserver.leagueInfoNav.notify("Live");
     }, []);
     return (
          <div>
               <div>live</div>
          </div>
     );
}
