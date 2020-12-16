import { useEffect, useState } from "react";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((result) => {
        setAdvice(result.slip.advice);
      });
  }, []);

  // Optional condition - may want to remove
  return (
    <View>
      {advice ? (
        <Animatable.Text animation="bounceIn" style={styles.container}>
          {advice}
        </Animatable.Text>
      ) : (
        <Animatable.Text
          animation="zoomInUp"
          style={styles.container}
        ></Animatable.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: 15,
    marginRight: 15,
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontFamily: "monospace",
        fontSize: 20,
      },
      default: {
        // other platforms, web for example
        fontSize: 22,
      },
    }),
  },
});

export default Advice;
