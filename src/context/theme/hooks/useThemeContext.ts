import { useContext } from "react";

import { ThemeContext } from "@/context/theme/Theme.context";

export const useTheme = () => useContext(ThemeContext);
