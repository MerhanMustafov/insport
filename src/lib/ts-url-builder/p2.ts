export const P2 = {
    leagues: {
        seasons: null
    },
    teams: {
        statistics: {
            league: 1 as number, // int
            season: 1 as number, // int ---> YYYY
            team: 1 as number, // int
            date: "" as string // string ---> YYYY-MM-DD
        },
        season: {
            team: 1 as number // int
        },
        countries: null
    },
    fixtures: {
        rounds: {
            league: 1 as number, // int
            season: 1 as number, // int ---> YYYY
            current: true as boolean // bool
        },
        headtohead: {
            h2h: "" as string, // string ---> ID-ID (ids of the teams)
            date: "" as string, // string ---> YYYY-MM-DD
            league: 1 as number, // int
            season: 1 as number, // int
            last: 1 as number, // int
            next: 1 as number, // int
            from: "" as string, // string ---> YYYY-MM-DD
            to: "" as string, // string ---> YYYY-MM-DD
            status: "" as string, // string ---> Enum: "NS" "NS-PST-FT"
            venue: 1 as number, // int
            timezone: "" as string // string
        },
        statistics: {
            fixture: 1 as number, // int
            team: 1 as number, // int
            type: "" as string // string
        },
        events: {
            fixture: 1 as number, // int
            team: 1 as number, // int
            player: 1 as number, // int
            type: "" as string // string
        },
        lineups: {
            fixture: 1 as number, // int
            team: 1 as number, // int
            player: 1 as number, // int
            type: "" as string // string
        }
    },
    players: {
        seasons: {
            player: 1 as number // int
        },
        squads: {
            team: 1 as number, // int
            player: 1 as number // int
        },
        topscorers: {
            league: 1 as number, // int
            season: 1 as number // int ---> YYYY
        },
        topassists: {
            league: 1 as number, // int
            season: 1 as number // int ---> YYYY
        },
        topyellocards: {
            league: 1 as number, // int
            season: 1 as number // int ---> YYYY
        },
        topredcards: {
            league: 1 as number, // int
            season: 1 as number // int ---> YYYY
        }
    },
    odds: {
        live: {
            fixture: 1 as number, // int
            league: 1 as number, // int
            bet: 1 as number // int
        },
        mapping: {
            page: 1 as number // int ---> default: 1
        },
        bookmakers: {
            id: 1 as number, // int ---> The id of the bookmaker
            search: "" as string // string
        },
        bets: {
            id: 1 as number, // int ---> The id of the bet name
            search: "" as string // string
        }
    }
};
