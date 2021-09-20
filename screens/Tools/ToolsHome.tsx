import React from "react";
import { useNavigation } from "@react-navigation/core";
import { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const toolScreens = ["Timer"];

export const ToolsHome: FunctionComponent = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      {toolScreens.map((toolScreen) => {
        return (
          <TouchableOpacity
            key={toolScreen}
            style={{ height: 100, width: 100, backgroundColor: "blue" }}
            onPress={() => navigation.navigate(toolScreen)}
          >
            <Text>{toolScreen}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
