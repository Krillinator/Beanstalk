import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Button,
  Animated,
} from "react-native";
import Constants from "expo-constants";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Photo App Camera Permission",
        message:
          "Photo app needs your permission to use the camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You may use the camera!");
    } else {
      alert("You may not use the camera!");
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

function Permission() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[{ opacity: fadeAnim }]}>
        <Text
          style={{
            fontSize: 25,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          Fading View!
        </Text>
      </Animated.View>
      <Button title="Fade In" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
      <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Permission;
