import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";

function FormCharacter() {
  return (
    <KeyboardAwareScrollView>
      <View>
        <TextInput
          placeholder="Edit your name"
          style={styles.textBox}
        ></TextInput>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  textBox: {
    marginTop: 5,
    backgroundColor: "green",
    ...Platform.select({
      ios: {
        borderColor: "gray",
      },
      android: {
        borderColor: "gray",
        borderWidth: 1,
      },
      default: {},
    }),
  },
});

export default FormCharacter;
