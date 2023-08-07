import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData, ICountry, ILeague, ISeason } from "@/models/api";

interface ILeagueData {
     league: ILeague;
     country: ICountry;
     seasons: ISeason;
}

export default async function getLeagues(selectedCountry: string) {
     return axiosInstance
          .get(`/leagues?country=${selectedCountry}`)
          .then((res) => (res.data as IAxiosData<ILeagueData[]>).response);
}
