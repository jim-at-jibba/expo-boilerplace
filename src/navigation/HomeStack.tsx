import {createStackNavigator} from "@react-navigation/stack"
import React from "react"

import HomeScreen from "../features/Home/Home"
import {HomeStackParamsList} from "./HomeStackParamsList"

interface HomeStackProps {}

const Stack = createStackNavigator<HomeStackParamsList>()

export const HomeStack: React.FC<HomeStackProps> = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
)
