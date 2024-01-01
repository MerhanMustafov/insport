import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LeagueInfoPage from "@/pages/LeagueInfoPage";
import { LANDING, LEAGUES, SOCCER } from "@/router/pathConsts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={LANDING} element={<LandingPage />} />
      <Route path={SOCCER} element={<LandingPage />} />
      <Route path={`${SOCCER}/:date`} element={<LandingPage />} />
      <Route path={`${LEAGUES}/:leagueId/:section`} element={<LeagueInfoPage />} />
    </Routes>
  );
}
