import React from "react";

import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";

const numCols = 3;
const screenWidth = Dimensions.get("screen").width;
const featureWidth = screenWidth / numCols;

const features = [
  {
    title: "Attendance",
    screen: "Attendance",
  },
  {
    title: "Admin",
    screen: "Admin",
  },
  {
    title: "Behavior",
    screen: "Behavior",
  },
  {
    title: "Games",
    screen: "Games",
  },
  {
    title: "Tools",
    screen: "Tools",
  },
];

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>All in one teacher app</Text>
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
        {features.map((feature) => {
          return (
            <TouchableOpacity
              key={feature.title}
              onPress={() =>
                feature.screen ? navigation.navigate(feature.screen) : null
              }
            >
              <View
                key={feature.title}
                style={{
                  width: featureWidth,
                  height: featureWidth,
                  padding: 4,
                }}
              >
                <Text>{feature.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
