import { Color } from "@/context/theme/colors.enums";
import { ITheme, ThemeType } from "@/context/theme/theme.models";

export const THEME: Record<ThemeType, ITheme> = {
    //when the theme is LIGHT
    light: {
        "--bg-primary": Color.WHITE_BACKGROUND,
        "--bg-secondary": Color.DARK_BLUE,
        "--tx-primary": Color.DARK_TEXT_COLOR_PRIMARY,

        "--logo-sport": Color.VIOLET,
        "--logo-in": Color.WHITE_TEXT_COLOR_PRIMARY,

        "--nav-bg": Color.DARK_BLUE,
        "--nav-tx": Color.WHITE_TEXT_COLOR_PRIMARY
    },
    //when the theme is DARK
    dark: {
        "--bg-primary": Color.DARK_BACKGROUND,
        "--bg-secondary": Color.DARK_BLUE,
        "--tx-primary": Color.WHITE_TEXT_COLOR_PRIMARY,

        "--logo-sport": Color.VIOLET,
        "--logo-in": Color.WHITE_TEXT_COLOR_PRIMARY,

        "--nav-bg": Color.DARK_BLUE,
        "--nav-tx": Color.WHITE_TEXT_COLOR_PRIMARY
    }
};
