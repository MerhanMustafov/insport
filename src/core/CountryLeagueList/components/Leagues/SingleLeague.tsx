import { useNavigate } from "react-router-dom";

import { ILeague } from "@/models/api";

import {
    StyledContainer,
    StyledImage,
    StyledImageContainer,
    StyledName
} from "../../styles/SingleItem.style";

interface IProps extends ILeague {
    countryName: string;
}

export default function SingleLeague(props: IProps) {
    const { id, logo, name, countryName } = props;
    const navigate = useNavigate();

    function handleSingleLeagueClick() {
        navigate(`/football/${countryName}/${name}`, { state: { leagueId: id } });
        console.log("handleSingleLeagueClick: ID: ", id);
        console.log("handleSingleLeagueClick: Country Name: ", countryName);
        console.log("handleSingleLeagueClick: League Name: ", name);
    }

    return (
        <StyledContainer onClick={handleSingleLeagueClick}>
            <StyledImageContainer>
                <StyledImage
                    src={logo}
                    alt={`${name} logo`}
                />
            </StyledImageContainer>
            <StyledName>{name}</StyledName>
        </StyledContainer>
    );
}
