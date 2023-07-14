import { Color } from "./colors.enums";

export type ThemeType = "dark" | "light";

export interface ITheme {
    "--bg-primary": Color;
    "--bg-secondary": Color;
    "--tx-primary": Color;
    "--logo-in": Color;
    "--logo-sport": Color;
    "--nav-bg": Color;
    "--nav-tx": Color;
}
