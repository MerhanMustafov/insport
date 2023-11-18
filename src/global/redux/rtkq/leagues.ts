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

export const leaguesApiSlice = createApi({
  reducerPath: "leaguesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  keepUnusedDataFor: 60 * 60 * 24,
  endpoints: (build) => ({
    getLeaguesByCountryName: build.query<LeaguesReturnType, string>({
      query: (countryName: string) => `/leagues/${countryName}`
    })
  })
});

export const { useGetLeaguesByCountryNameQuery, useLazyGetLeaguesByCountryNameQuery } =
  leaguesApiSlice;
