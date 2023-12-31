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
  teamId: number, 
  '#' : number,
  Team: string,
  PTS: number,
  P: number,
  W: number,
  D: number,
  L: number,
  GF: number,
  GA: number,
  GD: number,
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
