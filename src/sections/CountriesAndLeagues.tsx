import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetCountriesQuery } from "@/global/redux/rtkq/countries";
import { useLazyGetLeaguesByCountryNameQuery } from "@/global/redux/rtkq/leagues";
import Country from "@/sections/Country";
import League from "@/sections/League";

const StyledWrapper = styled.div`
  padding: 10px;
  margin: 0px 3px;
  box-shadow: #000000 0px 0px 7px -1px;
  border-radius: 5px;
  /* border: 1px solid #000000; */
`;

const StyledCountryListWrapper = styled.div`
  /* border: 1px solid #000000; */
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledCountriesWrapper = styled.div`
  /* border: 1px solid #000000; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const StyledCountriesHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  /* gap: 10px; */
  align-items: center;
  /* border: 1px solid #000000; */
  /* padding: 5px 10px; */
  width: 100%;
  max-width: 150px;
  min-width: 120px;
  padding: 1px 5px;
`;

const StyledInputWrapper = styled.div`
  border: 1px solid #000000;
  display: flex;
  gap: 3px;
  border-radius: 5px;
  overflow: hidden;
  &:focus-within {
    box-shadow: #1183d6 0px 0px 7px -1px;
  }
`;
const StyledCountryInput = styled.input`
  width: 100%;
  outline-style: none;
  padding: 5px 7px;
  border: none;
`;
const StyledIcon = styled.span`
  font-size: 1.6rem;
  padding-left: 3px;
  cursor: pointer;
`;
const StyledLeaguesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLeagueListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledLeagueHeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 0px 0px 5px 0px;
`;

const StyledBackButton = styled.button`
  font-size: 1.8rem;
  background: #ffffff;
  color: #000000;
  display: block;
  width: max-content;
  padding: 0px 8px;
  cursor: pointer;
  border: 1px solid #848484;
  &:hover {
    scale: 0.9;
  }
`;

const LeagueCountryName = styled.div`
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
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
  const [selectedCountry, setSelectedCountry] = useState<{ name: string; flag: string }>({
    name: "",
    flag: ""
  });

  useEffect(() => {
    setShowLeagues(false);
  }, []);

  const handleCountryClick = (name: string, flag: string) => {
    getLeaguesBeCountryName(name, true);
    setSelectedCountry({ name, flag });
    setShowLeagues(true);
  };

  const handleLeagueClick = () => {
    // TODO: implement corresponding logic
  };

  const handleBackClick = () => {
    setShowLeagues(false);
  };

  if (isCountriesLoading || isLeaguesLoading) {
    return <h1>loading...</h1>;
  }

  if (isCountriesError || isLeaguesError) {
    return <h1>error...</h1>;
  }

  return (
    <StyledWrapper>
      {!showLeagues && countries && countries?.data.length > 0 && (
        <StyledCountriesWrapper>
          <StyledCountriesHeadWrapper>
            <StyledInputWrapper>
              <StyledIcon>&#x1F50D;&#xFE0E;</StyledIcon>
              <StyledCountryInput type="text" placeholder="Type ..." />
            </StyledInputWrapper>
          </StyledCountriesHeadWrapper>
          <StyledCountryListWrapper>
            {countries?.data.map((country, i) => (
              <Country
                key={`${country.code}-${i}`}
                {...country}
                handleCountryClick={handleCountryClick}
              />
            ))}
          </StyledCountryListWrapper>
        </StyledCountriesWrapper>
      )}

      {showLeagues && leagues && leagues?.data.length > 0 && (
        <StyledLeaguesWrapper>
          <StyledLeagueHeadWrapper>
            <StyledBackButton onClick={handleBackClick}>&lsaquo;</StyledBackButton>
            <LeagueCountryName>{selectedCountry.name}</LeagueCountryName>
          </StyledLeagueHeadWrapper>
          <StyledLeagueListWrapper>
            {leagues?.data?.map((data) => (
              <League
                key={data.league.id}
                name={data.league.name}
                logo={data.league.logo}
                handleLeagueClick={handleLeagueClick}
              />
            ))}
          </StyledLeagueListWrapper>
        </StyledLeaguesWrapper>
      )}
    </StyledWrapper>
  );
}
