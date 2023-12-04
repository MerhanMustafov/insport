import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { filterCountriesUtil, useGetCountriesQuery } from "@/global/redux/rtkq/countries";
import { useLazyGetLeaguesByCountryNameQuery } from "@/global/redux/rtkq/leagues";
import Country from "@/components/pageSpecific/landingPage/Country";
import League from "@/components/pageSpecific/landingPage/League";

const StyledWrapper = styled.div`
  padding: 10px;
  margin: 0px 3px;
  box-shadow: #000000 0px 0px 7px -1px;
  border-radius: 5px;
  min-height: 300px;
  min-width: 150px;
`;

const StyledCountryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledCountriesWrapper = styled.div`
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
  align-items: center;
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
  const navigate = useNavigate();
  // RTK Queries
  const {
    data: countries,
    isLoading: isCountriesLoading,
    isError: isCountriesError
  } = useGetCountriesQuery();
  const [
    getLeaguesBeCountryName,
    { data: leagues, isLoading: isLeaguesLoading, isError: isLeaguesError }
  ] = useLazyGetLeaguesByCountryNameQuery();

  // Local state
  const [showLeagues, setShowLeagues] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{ name: string; flag: string }>({
    name: "",
    flag: ""
  });
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<typeof countries>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleCountryClick = (name: string, flag: string): void => {
    getLeaguesBeCountryName(name, true);
    setSelectedCountry({ name, flag });
    setShowLeagues(true);
  };

  const handleLeagueClick = (path: string): void => {
    navigate(path);
  };

  const handleBackClick = (): void => {
    setShowLeagues(false);
    setFilteredCountries(undefined);
  };

  const handleFilterCountriesData = () => {
    const filteredCountriesData = filterCountriesUtil(countries, search);
    setFilteredCountries(filteredCountriesData);
  };

  useEffect(() => {
    setShowLeagues(false);
  }, []);

  useEffect(() => {
    const filterWithDeleay = setTimeout(() => {
      handleFilterCountriesData();
    }, 1000);

    return () => clearTimeout(filterWithDeleay);
  }, [search]);

  const countriesData = filteredCountries?.data || countries?.data || [];

  if (isCountriesLoading || isLeaguesLoading) {
    return (
      <StyledWrapper>
        <h1>Loading...</h1>
      </StyledWrapper>
    );
  }

  if (isCountriesError || isLeaguesError) {
    return <h1>error...</h1>;
  }

  return (
    <StyledWrapper>
      {!showLeagues && (
        <StyledCountriesWrapper>
          <StyledCountriesHeadWrapper>
            <StyledInputWrapper onClick={handleFilterCountriesData}>
              <StyledIcon>&#x1F50D;&#xFE0E;</StyledIcon>
              <StyledCountryInput
                type="text"
                placeholder="Type ..."
                spellCheck={false}
                value={search}
                onChange={handleInputChange}
              />
            </StyledInputWrapper>
          </StyledCountriesHeadWrapper>
          <StyledCountryListWrapper>
            {countriesData.map((country, i) => (
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
                id={data.league.id}
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
