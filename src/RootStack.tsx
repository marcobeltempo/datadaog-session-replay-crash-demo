import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./HomeScreen";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home" id={undefined}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
