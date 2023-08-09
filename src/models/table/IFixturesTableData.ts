export interface IFormattedFixturesData {
     status: { short: string; long: string };
     n: number;
     teams: {
          home: {
               name: string;
               logo: string;
          };
          away: {
               name: string;
               logo: string;
          };
     };
     date: string;
     time: string;
     round: string;
     result: {
          home: number;
          away: number;
     };
}
