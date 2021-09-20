import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/Home";
import { AttendanceScreen } from "./screens/Attendance";
import { AdminScreen } from "./screens/Admin";
import { BehaviorScreen } from "./screens/Behavior";
import { GamesScreen } from "./screens/Games";
import { ToolsScreen } from "./screens/Tools";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "FUCK" }}
        />
        <Stack.Screen
          name="Attendance"
          component={AttendanceScreen}
          options={{ title: "Attendance" }}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{ title: "Admin" }}
        />
        <Stack.Screen
          name="Behavior"
          component={BehaviorScreen}
          options={{ title: "Behavior" }}
        />
        <Stack.Screen
          name="Games"
          component={GamesScreen}
          options={{ title: "Games" }}
        />
        <Stack.Screen
          name="Tools"
          component={ToolsScreen}
          options={{ title: "Tools" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
