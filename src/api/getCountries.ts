import axiosInstance from "@/lib/axios/axiosConfig";
import { urlBuilder } from "@/lib/ts-url-builder/ts-url-builder";
import { IAxiosData, ICountry } from "@/models/api";

export async function getCountries() {
    const endpoint = urlBuilder.new().setPath("countries").build();

    return axiosInstance
        .get(endpoint)
        .then((res) => (res.data as IAxiosData<ICountry[]>).response);
}
