import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";

const StyledHeaderLeagueInfoContainer = styled("div")`
    border: 2px solid red;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 50px auto;
    grid-template-areas: "leagueCountryImg leagueCountry";
    gap: 20px;
`;

const StyledImgContainer = styled("div")`
    border: 2px solid purple;
    grid-area: leagueCountryImg;
    display: flex;
    /* justify-content: stretch; */
    /* align-items: ; */
`;

const StyledImg = styled("img")`
    width: 100%;
    /* height: 100%; */
`;

const StyledLeagueContainer = styled("h2")`
    grid-area: leagueCountry;
`;
const StyledLeagueTitle = styled("h2")``;

const StyledLeagueCountry = styled("h2")``;
// interface IProps {
//     leagueId: number;
//     countryName: string;
//     countryFlag: string;
//     leagueName: string;
//     leagueLogo: string;
//     seasonNumber: number;
// }
export default function LeagueInfoHeader() {
    // const { data: countries } = useQuery({
    //     queryKey: ["countries"]
    // });
    // console.log(countries);

    return (
        <StyledHeaderLeagueInfoContainer>
            data
            {/* <StyledImgContainer>
                <StyledImg
                    style={{ width: "100%" }}
                    src={countryFlag}
                    alt="country flag"
                />
            </StyledImgContainer>
            <StyledLeagueContainer>
                <StyledLeagueTitle> {leagueName}</StyledLeagueTitle>
                <StyledLeagueCountry>{countryName}</StyledLeagueCountry>
            </StyledLeagueContainer> */}
        </StyledHeaderLeagueInfoContainer>
    );
}
