import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import { Divider } from "react-native-elements";
import * as Animatable from "react-native-animatable";

function Animation() {
  return (
    <View>
      <Animatable.Text animation="bounceIn">
        <Text style={styles.container}>Bean Stalk</Text>
      </Animatable.Text>
      <Divider style={{ backgroundColor: "blue" }}></Divider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        fontFamily: "AlNile-Bold",
        fontSize: 60,
      },
      android: {
        fontFamily: "monospace",
        fontSize: 60,
      },
      default: {
        // other platforms, web for example
        fontSize: 35,
      },
    }),
  },
});

export default Animation;
