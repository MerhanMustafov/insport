import { TLeagueInfoNavLinks } from "@/models/links/ILeagueInfoNavLinks";

type TypeObserverFN = (newActiveLink: TLeagueInfoNavLinks) => void;

export class LeagueInfoActiveLinkObserver {
     private observers: TypeObserverFN[];

     constructor() {
          this.observers = [];
     }

     subscribe(newSubsciberFN: TypeObserverFN) {
          const exists = this.observers.find((fn) => fn === newSubsciberFN); // returns undefined or the function
          if (!exists) {
               this.observers.push(newSubsciberFN);
          }
     }

     unsubscribe(subscriberToBeRemoved: TypeObserverFN) {
          this.observers = this.observers.filter((fn) => fn !== subscriberToBeRemoved);
     }

     notify(newActiveLink: TLeagueInfoNavLinks) {
          this.observers.forEach((observer) => observer(newActiveLink));
     }
}
