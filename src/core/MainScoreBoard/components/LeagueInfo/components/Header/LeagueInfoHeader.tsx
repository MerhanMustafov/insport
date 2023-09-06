import styled from "styled-components";

const StyledTableRow = styled("tr")`
    border-collapse: collapse;
`;
const StyledLeagueName = styled("div")`
    font-size: clamp(0.7rem, 1vw, 1rem);
`;
const StyledLeagueCountry = styled("div")`
    font-size: clamp(0.9rem, 1.2vw, 1.2rem);
`;

const StyledLogoImgContainer = styled("div")`
    width: 25px;
`;
const StyleLeageLogoImg = styled("img")`
    width: 100%;
`;
const StyledContainer = styled("span")`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    background: rgba(0, 30, 30, 1);
    color: white;
    padding: 5px 0px 5px 5px;
    width: auto;
`;
interface IProps {
    colLength: number;
    countryName: string;
    leagueLogo: string;
    leagueName: string;
}
export default function LeagueInfoHeader(props: IProps) {
    const { colLength, countryName, leagueName, leagueLogo } = props;
    return (
        <StyledTableRow>
            <th colSpan={colLength}>
                <StyledContainer>
                    <StyledLogoImgContainer>
                        <StyleLeageLogoImg
                            src={leagueLogo}
                            alt="logo"
                        />
                    </StyledLogoImgContainer>
                    <StyledLeagueCountry>{countryName}</StyledLeagueCountry>
                    <span>/</span>
                    <StyledLeagueName>{leagueName}</StyledLeagueName>
                </StyledContainer>
            </th>
        </StyledTableRow>
    );
}
