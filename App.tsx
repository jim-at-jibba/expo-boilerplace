import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native"
import React from "react"

import AsyncBootstrap from "./src/components/AsyncBootstrap"
import {Routes} from "./src/navigation/routes"

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
    <AsyncBootstrap theme={globalTheme} {...{fonts}}>
      <Routes />
    </AsyncBootstrap>
  )
}
