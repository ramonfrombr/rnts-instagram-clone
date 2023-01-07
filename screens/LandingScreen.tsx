import { View, Text } from "react-native";
import React from "react";
import config from "../config";

const LandingScreen = () => {
  console.log(config);
  return (
    <View>
      <Text>{config.FIREBASE_API_KEY}</Text>
    </View>
  );
};

export default LandingScreen;
