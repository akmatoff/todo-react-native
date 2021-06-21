import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import FeatherIcon from "react-native-vector-icons/Feather";
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

      <Text style={styles.taskTitle}>{props.title}</Text>

      {props.selecting ? (
        <TouchableOpacity>
          <FeatherIcon
            name="trash-2"
            size={20}
            color={primaryColor}
            style={{ alignSelf: "flex-end" }}
          ></FeatherIcon>
        </TouchableOpacity>
      ) : null}
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
    flex: 3,
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
  taskTitle: {
    width: "85%",
  },
});
