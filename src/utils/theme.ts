import {DefaultTheme} from "styled-components/native"

import colors from "./colors"

const theme: DefaultTheme = {
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "38px",
  },
  colors: {
    white: "#ffffff",
    accent: colors.accent,
    accentDark: colors.accentDark,
    accentLight: colors.accentLight,
    primary: colors.primary,
    primaryDark: colors.primaryDark,
    primaryLight: colors.primaryLight,
    error: colors.error,
    warn: colors.warn,
    success: colors.success,
    background: colors.background,
  },
  fonts: {
    weights: {
      light: 100,
      normal: 300,
      bold: 700,
    },
    colors: {
      placeholder: colors.placeholder,
      primary: colors.textPrimary,
      accent: colors.textAccent,
      secondary: "#8B9FAC",
      white: colors.accentLight,
      titlePrimary: colors.titlePrimary,
      titleDark: colors.primaryDark,
    },
    family: "Oswald-Regular",
    sizes: {
      small: "12px",
      normal: "14px",
      h1: "28px",
      h2: "20px",
      h3: "17px",
      h4: "15px",
      h5: "13px",
      h6: "10px",
    },
  },
  roundness: "4px",
}

export type ThemeInterface = typeof theme
export {theme}
