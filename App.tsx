import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native"
import React from "react"

import AsyncBootstrap from "./src/components/AsyncBootstrap"
import {Routes} from "./src/navigation/routes"
import {ThemeProvider} from "./src/utils/styled-components"
import {theme} from "./src/utils/theme"

const fonts = {}

const DefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
  },
}

const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
  },
}
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const globalTheme = isDarkTheme ? DarkTheme : DefaultTheme

  return (
    <ThemeProvider theme={theme}>
      <AsyncBootstrap theme={globalTheme} {...{fonts}}>
        <Routes />
      </AsyncBootstrap>
    </ThemeProvider>
  )
}
