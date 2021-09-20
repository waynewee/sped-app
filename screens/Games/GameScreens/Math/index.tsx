import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Mathamaniac } from "./Mathamaniac";
import { MathPuzzler } from "./MathPuzzler";

const games = [
  {
    title: "Mathamanac",
    component: <Mathamaniac />,
  },
  {
    title: "Math Puzzler",
    component: <MathPuzzler />,
  },
];
export const MathGamesScreen: FunctionComponent = () => {
  const Stack = createNativeStackNavigator();

  const [activeGame, setActiveGame] = useState<undefined | string>(undefined);

  return (
    <View>
      <Text>MATH GAMES</Text>
      {games.map((game) => {
        return (
          <TouchableOpacity onPress={() => setActiveGame(game.title)}>
            <Text>{game.title}</Text>
          </TouchableOpacity>
        );
      })}
      {activeGame !== undefined &&
        games.filter((game) => game.title === activeGame)[0].component}
    </View>
  );
};
