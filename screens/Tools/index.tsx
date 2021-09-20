import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { FunctionComponent } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { Timer } from "./Timer";
import { ToolsHome } from "./ToolsHome";

export const ToolsScreen: FunctionComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ToolsHome}
        name={"TOOLS"}
        options={{ title: "TOOLS" }}
      />
      <Stack.Screen
        component={Timer}
        name={"Timer"}
        options={{ title: "Timer" }}
      />
    </Stack.Navigator>
  );
};
