import { Route, Routes } from "react-router-dom";

export default function LeagueInfoRoutes() {
     return (
          <Routes>
               <Route
                    path="/"
                    element={<div> OVERVIEW </div>}
               />
               <Route
                    path="/overview"
                    element={<div> OVERVIEW </div>}
               />

               <Route
                    path="/table"
                    element={<div> Table </div>}
               />
          </Routes>
     );
}
