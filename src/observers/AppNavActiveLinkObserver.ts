import { TypeLinks } from "@/models/links/IAppNavLinks";

type TypeObserverFN = (newActiveLink: TypeLinks) => void;

export class AppNavActiveLinkObserver {
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

     notify(newActiveLink: TypeLinks) {
          this.observers.forEach((observer) => observer(newActiveLink));
     }
}
