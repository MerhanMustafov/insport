import IFixtures from "@/models/api/IFixtures";

export default interface ICoverage {
    fixtures: IFixtures;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    predictions: boolean;
    odds: boolean;
}
