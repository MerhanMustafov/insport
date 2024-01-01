import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INSPORT_FOOTBALL_BASE_URL } from "@/global/constants/app.constants";

interface LeaguesReturnType {
  data: {
    country: {
      name: string;
      code: string;
      flag: string;
    };
    league: {
      id: number;
      name: string;
      type: string;
      logo: string;
    };
  }[];
  numberOfLeagues: number;
}

interface LeagueStandingReturnType {
  leagueData: {
    id: number;
    country: string;
    flag: string;
    logo: string;
    name: string;
    season: number;
  };
  standing: StandingKeys[];
}

export interface StandingKeys {
  teamId: number;
  "#": number;
  Team: string;
  PTS: number;
  P: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
}

interface IFixture {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: ILeague;
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: true;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: false;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}
interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: 2023;
  round: string;
}
// NOTE: Think for how log will you cache the data
export const leaguesApiSlice = createApi({
  reducerPath: "leaguesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  keepUnusedDataFor: 60 * 60 * 24, // 24 hours
  endpoints: (build) => ({
    getLeaguesByCountryName: build.query<LeaguesReturnType, string>({
      query: (countryName: string) => `/leagues/${countryName}`
    }),
    getLeagueStanding: build.query<LeagueStandingReturnType, { leagueId: number; season: number }>({
      // league info and league standing data
      query: (args) => {
        const { leagueId, season } = args;
        return {
          url: `/standing/${leagueId}/${season}`
        };
      }
    }),
    getLeagueFixturesByStatus: build.query<
      IFixture[],
      { leagueId: number; season: number; status: string }
    >({
      query: (args) => {
        const { leagueId, season, status } = args;

        return {
          url: `/fixtures/${leagueId}/${season}/${status}`
        };
      }
    })
  })
});

export const {
  useGetLeaguesByCountryNameQuery,
  useLazyGetLeaguesByCountryNameQuery,
  useGetLeagueStandingQuery,
  useGetLeagueFixturesByStatusQuery
} = leaguesApiSlice;
