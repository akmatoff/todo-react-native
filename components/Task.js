import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import FeatherIcon from "react-native-vector-icons/Feather";
import { secondaryColor, primaryColor } from "../tools/consts";

export default function Task(props) {
  return (
    <View
      style={[
        styles.taskContainer,
        { borderWidth: props.selectedTasks.includes(props.task) ? 2 : 0 },
      ]}
    >
      {/* Checkbox. Return elements depending on whether the task is completed or not. */}
      {props.task.completed ? (
        <Icon
          name="checkbox"
          size={22}
          color={primaryColor}
          style={{ marginRight: 10 }}
        ></Icon>
      ) : (
        <View style={styles.checkbox}></View>
      )}

      <Text style={styles.taskTitle}>{props.task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: secondaryColor,
    borderColor: primaryColor,
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
