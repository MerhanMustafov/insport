import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INSPORT_FOOTBALL_BASE_URL } from "@/global/constants/app.constants";
import { QueryParamsType, getQueryString } from "@/global/redux/utils/getQueryString";

interface CountriesReturnType {
  data: {
    name: string;
    code: string;
    flag: string;
  }[];
  numberOfCountries: number;
}

interface CountriesQueryParamsType extends QueryParamsType {
  name?: string;
  code?: string;
  search?: string;
}

export const countriesApiSlice = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: INSPORT_FOOTBALL_BASE_URL }),
  endpoints: (build) => ({
    getCountries: build.query<CountriesReturnType, void>({
      query: () => "/countries"
    }),
    getSingleCountry: build.query<CountriesReturnType, CountriesQueryParamsType>({
      query: (params: CountriesQueryParamsType) => {
        const query = getQueryString(params);
        return `/countries${query}`;
      }
    })
  })
});

export const { useGetCountriesQuery, useLazyGetSingleCountryQuery } = countriesApiSlice;
