import React from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ListItem } from "react-native-elements";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BorderlessButton } from "react-native-gesture-handler";

function StorageLogic() {
  const STORAGE_KEY = "@save_list";
  // Data Getter
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  // Data Setter
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const [description, setDescription] = useState([
    { name: "Benny", subtitle: "Vice president" },
  ]);

  useEffect(() => {
    getData().then((value) => {
      console.log(value, "Testing");

      if (value) {
        setDescription(value);
      }
    });
  }, []);

  // SUBMIT LOGIC
  function handleSubmit(values) {
    const newItem = [
      ...description,
      { name: values.description, subtitle: values.subtitle },
    ];
    setDescription(newItem);
    storeData(newItem);
  }

  return (
    <View>
      <View style={{ backgroundColor: "#fff", width: 350, paddingTop: 15 }}>
        {/* FORMS */}
        <Formik
          initialValues={{ description: "", subtitle: "" }}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);

            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Text style={styles.text}> Title</Text>
              <TextInput
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                placeholder="Home, work, etc.."
                style={styles.input}
                value={values.description}
              />

              <Text style={styles.text}> Description</Text>
              <TextInput
                required
                onChangeText={handleChange("subtitle")}
                onBlur={handleBlur("subtitle")}
                placeholder="What needs to be done?"
                style={styles.input}
                value={values.subtitle}
              />
              <Button
                onPress={handleSubmit}
                title="Submit"
                style={styles.button}
              />
            </View>
          )}
        </Formik>
      </View>

      {/* RENDER LIST */}
      <KeyboardAwareScrollView>
        <ScrollView>
          <View style={styles.list}>
            {description.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <View style={{ alignSelf: "flex-end" }}>
                    <ListItem.Chevron
                      name={"delete"}
                      size={35}
                      color="red"
                      onPress={() => {
                        setDescription(
                          description
                            .slice(0, i)
                            .concat(description.slice(i + 1))
                        );
                      }}
                    ></ListItem.Chevron>
                  </View>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 20,
    marginBottom: 20,
    marginStart: 15,
    marginEnd: 15,
    paddingStart: 15,
  },
  text: {
    fontSize: 20,
    marginStart: 10,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  list: {
    flex: 1,
    alignSelf: "stretch",
    paddingTop: 15,
  },
});

export default StorageLogic;
