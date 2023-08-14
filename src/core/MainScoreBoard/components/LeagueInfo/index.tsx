import { useParams } from "react-router-dom";

import LeagueInfoNavigation from "@/core/Nav/LeagueInfoNavigation/LeagueInfoNavigation";
import LeagueInfoRoutes from "@/routes/LeagueInfoRoutes";

export default function LeagueInfo() {
     const params = useParams();

     console.log(params);

     return (
          <>
               <LeagueInfoNavigation />
               <LeagueInfoRoutes />
          </>
     );
}
