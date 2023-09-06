export interface IFixtures {
    fixture: {
        id: number;
        referee: string | null;
        timezone: string;
        date: Date;
        timestamp: number;
        // periods: {
        //     first: null;
        //     second: null;
        // };
        venue: {
            id: number;
            name: string;
            city: string;
        };
        status: {
            long: string;
            short: string;
            // elapsed: null;
        };
    };
    league: {
        id: number;
        name: string;
        country: string;
        logo: string;
        flag: string;
        season: number;
        round: string;
    };
    teams: {
        home: {
            id: 858;
            name: string;
            logo: string;
            // winner: null;
        };
        away: {
            id: 859;
            name: string;
            logo: string;
            // winner: null;
        };
    };
    goals: {
        // home: null;
        // away: null;
    };
    score: {
        halftime: {
            // home: null;
            // away: null;
        };
        fulltime: {
            // home: null;
            // away: null;
        };
        extratime: {
            // home: null;
            // away: null;
        };
        penalty: {
            // home: null;
            // away: null;
        };
    };
}
