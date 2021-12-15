import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native"
import React from "react"
import {SafeAreaProvider} from "react-native-safe-area-context"

import AsyncBootstrap from "./src/components/AsyncBootstrap"
import {Routes} from "./src/navigation/routes"
import {ThemeProvider} from "./src/utils/styled-components"
import {theme} from "./src/utils/theme"
import StorybookUI from "./storybook"

const fonts = {}

const WITH_STORYBOOK = true

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

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const globalTheme = isDarkTheme ? DarkTheme : DefaultTheme

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <AsyncBootstrap theme={globalTheme} {...{fonts}}>
          <Routes />
        </AsyncBootstrap>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default WITH_STORYBOOK ? StorybookUI : App
