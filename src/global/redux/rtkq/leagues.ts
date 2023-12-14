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
  standing: {
    rank: number;
    team: {
      id: number;
      name: string;
      logo: string;
    };
    points: number;
    group: string;
    form: string;
    status: string;
    description: string;
    goalsDiff: number;
    all: StandingMatchStats;
    away: StandingMatchStats;
    home: StandingMatchStats;
  }[];
}

interface StandingMatchStats {
  draw: number;
  lose: number;
  played: number;
  win: number;
  goals: { for: number; against: number };
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
    })
  })
});

export const {
  useGetLeaguesByCountryNameQuery,
  useLazyGetLeaguesByCountryNameQuery,
  useGetLeagueStandingQuery
} = leaguesApiSlice;
