export const P1 = {
    timezone: null,
    countries: {
        name: "" as string, //string
        code: "" as string, //string
        search: "" as string //string
    },
    leagues: {
        id: 1 as number, // int
        name: "" as string, // string
        country: "" as string, // string
        code: "" as string, // string
        season: 1 as number, // int
        team: 1 as number, // int
        type: "" as string, // string
        current: "" as string, // string
        search: "" as string, // string
        last: 1 as number // int
    },
    teams: {
        id: 1 as number, // int
        name: "" as string, // string
        league: 1 as number, // int
        season: 1 as number, // int
        code: "" as string, // string
        venue: 1 as number, // int
        search: "" as string // string
    },
    venues: {
        id: 1 as number, // int
        name: "" as string, // string
        city: "" as string, // string
        search: "" as string // string
    },
    standings: {
        league: 1 as number, // int
        season: 1 as number, // int
        team: 1 as number // int
    },
    fixtures: {
        id: 1 as number, // int
        ids: "" as string, // strings ---> "id-id-id"
        live: "" as string, // string
        date: "" as string, // string
        league: 1 as number, // int
        season: 1 as number, // int
        team: 1 as number, // int
        last: 1 as number, // int
        next: 1 as number, // int
        from: "" as string, // strng ---> YYYY-MM-DD
        to: "" as string, // strng ---> YYYY-MM-DD
        round: "" as string, // string
        status: "" as string, // string ---> Enum: "NS" "NS-PST-FT"
        venue: 1 as number, // int
        timezone: "" as string //string
    },
    injuries: {
        league: 1 as number, // int
        season: 1 as number, // int ---> YYYY
        fixture: 1 as number, // int
        team: 1 as number, // int
        player: 1 as number, // int
        date: "" as string, // string ---> YYYY-MM-DD
        timezone: "" as string // string
    },
    prediction: {
        fixture: 1 as number // int
    },
    coachs: {
        id: 1 as number, // int
        team: 1 as number, // int
        search: "" as string // string
    },
    players: {
        player: 1 as number // int
    },
    transfers: {
        player: 1 as number, // int
        team: 1 as number // int
    },
    trophies: {
        player: 1 as number, // int
        coach: 1 as number // int
    },
    sidelined: {
        player: 1 as number, // int
        coach: 1 as number // int
    },
    odds: {
        fixture: 1 as number, // int
        league: 1 as number, // int
        season: 1 as number, // int ---> YYYY
        date: "" as string, // string ---> YYYY-MM-DD
        timezone: "" as string, // string
        page: 1 as number, // int
        bookmaker: 1 as number, // int ---> Id of the bookmaker
        bet: 1 as number // int ---> Id of the bet
    }
};
