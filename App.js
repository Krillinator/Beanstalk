import "react-native-gesture-handler"; // Hast to be at TOP
import LinearGradient from "react-native-linear-gradient";
import * as React from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { Text, Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import * as Animatable from "react-native-animatable";

{
  /* COMPONENTS */
}
import Advice from "./components/Advice.js";
import Animation from "./components/Animation.js";
import StorageLogic from "./components/StorageLogic.js";
import Permission from "./components/Permission.js";
import Image from "./components/Image.js";

function HomeScreen({ navigation }) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Empty Space */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>

      {/* Logo */}
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image />
        <Animation />
      </View>

      {/* Button */}
      <Animatable.View
        animation="fadeInUpBig"
        iterationCount={1}
        style={{ flex: 2 }}
      >
        <LinearGradient
          start={{ x: 0.49, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.5, 0.6]}
          colors={["#ff6950", "#ff0050", "#ff4050"]}
          style={styles.linearGradient}
        >
          <Button
            color="#435677"
            title="Journey"
            onPress={() => navigation.navigate("Details")} // View-name
          />
        </LinearGradient>
      </Animatable.View>

      {/* Advice */}
      <View style={{ flex: 2 }}>
        <Advice />
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./assets/lines.jpeg")}
      style={styles.image}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text h1>Details Screen</Text>
        {/*       
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
        <Button title="Task List" onPress={() => navigation.navigate("ToDo")} />

        {/* <FormCharacter /> */}
        <Permission />
      </View>
    </ImageBackground>
  );
}

function ToDoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text h1> Task List </Text>

      <StorageLogic />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // Header Style
        screenOptions={{
          headerStyle: {
            backgroundColor: "#74caf2",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
            headerRight: () => (
              <Button
                onPress={() =>
                  alert("This application was made possible through studies")
                }
                title="Info"
                color="#a56af7"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ToDo" component={ToDoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.9,
  },
  linearGradient: {
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    ...Platform.select({
      ios: {
        color: "#ffffff",
      },
      android: {
        color: "#ffffff",
      },
      default: {},
    }),
  },
});

export default App;
