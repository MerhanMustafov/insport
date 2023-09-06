import axiosInstance from "@/lib/axios/axiosConfig";
import { urlBuilder } from "@/lib/ts-url-builder/ts-url-builder";
import { IAxiosData, ICountry, ILeague, ISeason } from "@/models/api";

export interface ILeagueData {
    league: ILeague;
    country: ICountry;
    seasons: ISeason;
}

export async function getLeagues(selectedCountry: string) {
    const endpoint = urlBuilder
        .new()
        .setPath("leagues")
        .setQuery("country", selectedCountry)
        .build();

    return axiosInstance
        .get(endpoint)
        .then((res) => (res.data as IAxiosData<ILeagueData[]>).response);
}
