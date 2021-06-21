import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import { secondaryColor, primaryColor } from "../consts";

export default function Task(props) {
  return (
    <View style={styles.singleTask}>
      {/* Checkbox. Return elements depending on whether the task is completed or not. */}
      {props.completed ? (
        <Icon
          name="checkbox"
          size={22}
          color={primaryColor}
          style={{ marginRight: 10 }}
        ></Icon>
      ) : (
        <View style={styles.checkbox}></View>
      )}

      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  singleTask: {
    backgroundColor: secondaryColor,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 17,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 15,
    width: 15,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: primaryColor,
    marginRight: 10,
  },
});
