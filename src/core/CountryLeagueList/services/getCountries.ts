import axiosInstance from "@/lib/axios/axiosConfig";
import { IAxiosData, ICountry } from "@/models/api";

export default async function getCountries() {
    console.log("IN: getCountries");

    return axiosInstance
        .get("/countries")
        .then((res) => (res.data as IAxiosData<ICountry[]>).response);
}
