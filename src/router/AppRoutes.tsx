import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LeagueInfoPage from "@/pages/LeagueInfoPage";
import { LANDING, LEAGUE, SOCCER } from "@/router/pathConsts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={LANDING} element={<LandingPage />} />
      <Route path={SOCCER} element={<LandingPage />} />
      <Route path={`${SOCCER}/:date`} element={<LandingPage />} />
      <Route path={`${LEAGUE}/:leagueId`} element={<LeagueInfoPage />} />
    </Routes>
  );
}
