import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const gameScreens = ["Math Games"];

export const GamesHome: FunctionComponent = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      {gameScreens.map((gameScreen) => {
        return (
          <TouchableOpacity
            key={gameScreen}
            onPress={() => navigation.navigate(gameScreen)}
          >
            <Text>{gameScreen}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
