import { Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LeagueInfoPage from "@/pages/LeagueInfoPage";
import SingleFixtureInfoPage from "@/pages/SingleFixtureInfoPage";
import { FIXTURE, LANDING, LEAGUES, SOCCER } from "@/router/pathConsts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={LANDING} element={<LandingPage />} />
      <Route path={SOCCER} element={<LandingPage />} />
      <Route path={`${SOCCER}/:date`} element={<LandingPage />} />
      <Route path={`${FIXTURE}/:fixtureId`} element={<SingleFixtureInfoPage />} />
      <Route path={`${LEAGUES}/:leagueId/:section`} element={<LeagueInfoPage />} />
    </Routes>
  );
}
