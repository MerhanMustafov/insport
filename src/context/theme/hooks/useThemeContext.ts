import { useContext } from "react";

import { ThemeContext } from "@/context/theme/Theme";

export const useTheme = () => useContext(ThemeContext);
