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

// NOTE: Think for how log will you cache the data
export const leaguesApiSlice = createApi({
  reducerPath: "leaguesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  keepUnusedDataFor: 60 * 60 * 24, // 24 hours
  endpoints: (build) => ({
    getLeaguesByCountryName: build.query<LeaguesReturnType, string>({
      query: (countryName: string) => `/leagues/${countryName}`
    }),
    getLeagueInfoById: build.query<any, string>({
      // league info and league standing data
      query: (leagueId) => `/singleLeague/${leagueId}`
    })
  })
});

export const {
  useGetLeaguesByCountryNameQuery,
  useLazyGetLeaguesByCountryNameQuery,
  useGetLeagueInfoByIdQuery
} = leaguesApiSlice;
