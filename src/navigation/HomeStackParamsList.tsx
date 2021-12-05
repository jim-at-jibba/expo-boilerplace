import {RouteProp} from "@react-navigation/native"
import {StackNavigationProp} from "@react-navigation/stack"

export type HomeStackParamsList = {
  Home: undefined
}

export type HomeStackNavProps<T extends keyof HomeStackParamsList> = {
  navigation: StackNavigationProp<HomeStackParamsList, T>
  route: RouteProp<HomeStackParamsList, T>
}
