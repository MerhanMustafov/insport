import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetCountriesQuery } from "@/global/redux/rtkq/countries";
import { useLazyGetLeaguesByCountryNameQuery } from "@/global/redux/rtkq/leagues";
import Country from "@/sections/Country";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledContentWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

export default function CountriesAndLeagues() {
  const {
    data: countries,
    isLoading: isCountriesLoading,
    isError: isCountriesError
  } = useGetCountriesQuery();
  const [
    getLeaguesBeCountryName,
    { data: leagues, isLoading: isLeaguesLoading, isError: isLeaguesError }
  ] = useLazyGetLeaguesByCountryNameQuery();
  const [showLeagues, setShowLeagues] = useState(false);

  useEffect(() => {
    setShowLeagues(false);
  }, []);

  const handleCountryClick = (name: string) => {
    getLeaguesBeCountryName(name, true);
    setShowLeagues(true);
  };

  if (isCountriesLoading || isLeaguesLoading) {
    return <h1>loading...</h1>;
  }

  if (isCountriesError || isLeaguesError) {
    return <h1>error...</h1>;
  }

  return (
    <StyledWrapper>
      {showLeagues && <button onClick={() => setShowLeagues(false)}>Back</button>}
      <StyledContentWrapper>
        {!showLeagues &&
          countries &&
          countries?.data.map((country, i) => (
            <Country
              key={`${country.code}-${i}`}
              {...country}
              handleCountryClick={handleCountryClick}
            />
          ))}
        {showLeagues &&
          leagues &&
          leagues?.data?.map((data) => <div key={data.league.id}>{data.league.name}</div>)}
      </StyledContentWrapper>
    </StyledWrapper>
  );
}
