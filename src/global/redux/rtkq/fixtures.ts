import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INSPORT_FOOTBALL_BASE_URL } from "@/global/constants/app.constants";

interface FixtureDataReturnType {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: null;
    };
    venue: {
      id: number | null;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
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
      id: number;
      name: string;
      logo: string;
      winner: null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | number;
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

export const fixturesApiSlice = createApi({
  reducerPath: "fixturesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  // keepUnusedDataFor: 60 * 60 * 24, // 24 hours
  endpoints: (build) => ({
    getFixturesByDate: build.query<any, string>({
      query: (date: string) => `/fixtures/${date}`
    })
  })
});

export const { useGetFixturesByDateQuery } = fixturesApiSlice;
