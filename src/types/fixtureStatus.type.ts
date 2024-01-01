export type IMatchStatusShort =
  | "NS"
  | "LIVE"
  | "1H"
  | "2H"
  | "HT"
  | "ET"
  | "BT"
  | "P"
  | "INT"
  | "FT";
export type IFixtureStatus = {
  elapsed: number | null;
  long: string;
  short: IMatchStatusShort;
};
