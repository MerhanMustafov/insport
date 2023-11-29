import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INSPORT_FOOTBALL_BASE_URL } from "@/global/constants/app.constants";

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
interface IDataReturnType {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: ILeague;
      leagueData: IFixture[];
    };
  };
}
export const fixturesApiSlice = createApi({
  reducerPath: "fixturesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  // keepUnusedDataFor: 60 * 60 * 24, // 24 hours
  endpoints: (build) => ({
    getFixturesByDate: build.query<IDataReturnType, string>({
      query: (date: string) => `/fixtures/${date}`
    })
  })
});

export const { useGetFixturesByDateQuery } = fixturesApiSlice;
