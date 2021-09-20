import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { FunctionComponent } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { MathGamesScreen } from "./GameScreens/Math";
import { GamesHome } from "./GamesHome";

export const GamesScreen: FunctionComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={GamesHome}
        name={"GAME CENTRAL"}
        options={{ title: "GAMES CENTRAL" }}
      />
      <Stack.Screen
        name={"Math Games"}
        options={{ title: "MATH GAMES" }}
        component={MathGamesScreen}
      />
    </Stack.Navigator>
  );
};
