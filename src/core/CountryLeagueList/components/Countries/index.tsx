import { useEffect, useState } from "react";

import { ICountry } from "@/models/api";

import { useQuery } from "@tanstack/react-query";

import { useCountryLeagueListContext } from "../../hooks/useCountryLeagueListContext";
import { getCountries } from "../../services";
import SingleCountry from "./SingleCountry";

export default function Countries() {
     const { searchWord } = useCountryLeagueListContext();
     const [filterd, setFiltered] = useState<ICountry[]>([]);

     const {
          data: countries,
          isLoading,
          isFetching
     } = useQuery({
          queryKey: ["countries"],
          queryFn: getCountries,
          refetchOnMount: false,
          refetchOnWindowFocus: false
     });

     useEffect(() => {
          if (searchWord) {
               const setData = setTimeout(() => {
                    const data = countries?.filter(
                         (c) => c.name?.toLowerCase().includes(searchWord.toLowerCase())
                    ) as ICountry[];
                    setFiltered(data);
               }, 600);
               return () => clearTimeout(setData);
          }
          setFiltered([]);
     }, [searchWord]);

     if (isLoading || isFetching) {
          return <div>LOADING ...</div>;
     }
     // TODO: Cover error case
     return (
          <>
               {countries &&
                    (filterd.length > 0 ? filterd : countries)
                         .filter((c) => c.code)
                         .map(
                              (c, i) =>
                                   c.code && (
                                        <SingleCountry
                                             key={`${c.code}-${i}`}
                                             code={c.code}
                                             name={c.name as string}
                                             flag={c.flag as string}
                                        />
                                   )
                         )}
          </>
     );
}
