import styled from "styled-components";

const StyledContainer = styled("div")`
    border: 1px solid black;
    padding: 10px;
    margin: 20px auto 10px auto;
`;
const StyledLeagueNameImageContainer = styled("div")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;
const StyledImageContainer = styled("div")`
    display: flex;
    width: 30px;
`;
const StyledImage = styled("img")`
    width: 100%;
`;

const StyledLeagueNameCountryContainer = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
const StyledCountryName = styled("span")`
    color: grey;
    font-size: 15px;
`;

const StyledLeagueTitle = styled("span")`
    font-size: 20px;
    font-weight: 600;
`;

interface IProps {
    countryName: string;
    flag: string;
    leagueName: string;
    logo: string;
}
export default function LeagueInfoHeader(props: IProps) {
    const { countryName, leagueName, logo } = props;
    return (
        <StyledContainer>
            <StyledLeagueNameImageContainer>
                <StyledImageContainer>
                    <StyledImage
                        src={logo}
                        alt="img"
                    />
                </StyledImageContainer>
                <StyledLeagueNameCountryContainer>
                    <StyledCountryName>{countryName}</StyledCountryName> /
                    <StyledLeagueTitle>{leagueName}</StyledLeagueTitle>
                </StyledLeagueNameCountryContainer>
            </StyledLeagueNameImageContainer>
        </StyledContainer>
    );
}
