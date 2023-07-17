import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";

import axiosInstance, { resolvePath } from "@/lib/axios/axiosConfig";

const StyledContainer = styled("div")`
    grid-area: LeagueInfo;
    border: 2px solid red;
`;

export default function LeagueInfo() {
    const location = useLocation();
    // const params = useParams();

    useEffect(() => {
        if ((location.state as { leagueId: string }).leagueId) {
            axiosInstance
                .get(
                    resolvePath(
                        `/standings?league=${
                            (location.state as { leagueId: string }).leagueId
                        }&season=${2022}`
                    )
                )
                .then((res) => console.log("STANDING 2023: ", res))
                .catch((err) => console.log("ERR: ", err));
        }
    }, [location]);

    return (
        <StyledContainer>
            <div>League INFO FOOTBALL</div>
            <div>STANDING</div>
        </StyledContainer>
    );
}
