import React from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

const DisplayAnImageWithStyle = () => {
  return (
    <Animatable.View animation="pulse" iterationCount="infinite">
      <Image style={styles.image} source={require("../assets/Logo.png")} />
    </Animatable.View>
  );
};

export default DisplayAnImageWithStyle;
