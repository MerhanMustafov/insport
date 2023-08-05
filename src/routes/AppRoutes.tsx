import { Route, Routes } from "react-router-dom";

import PageNews from "@/pages/PageNews";
import PageScores from "@/pages/PageScores";

import { urlPaths } from "./urlPaths";

export default function AppRoutes() {
     return (
          <Routes>
               <Route
                    path="/*"
                    element={<PageScores />}
               />

               <Route
                    path={urlPaths.NEWS}
                    element={<PageNews />}
               />
          </Routes>
     );
}
