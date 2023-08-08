import { AppNavActiveLinkObserver } from "./AppNavActiveLinkObserver";
import { LeagueInfoActiveLinkObserver } from "./LeagueInfoActiveNavObserver";

class ActiveLinkObserver {
     public appNav: AppNavActiveLinkObserver;
     public leagueInfoNav: LeagueInfoActiveLinkObserver;
     constructor() {
          this.appNav = new AppNavActiveLinkObserver();
          this.leagueInfoNav = new LeagueInfoActiveLinkObserver();
     }
}

export const activeLinkObserver = new ActiveLinkObserver();
