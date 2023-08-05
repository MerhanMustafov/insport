import { AppNavActiveLinkObserver } from "./AppNavActiveLinkObserver";

class ActiveLinkObserver {
     public appNav: AppNavActiveLinkObserver;
     constructor() {
          this.appNav = new AppNavActiveLinkObserver();
     }
}

export const activeLinkObserver = new ActiveLinkObserver();
