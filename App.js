import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import FeatherIcon from "react-native-vector-icons/Feather";
import Task from "./components/Task";
import {
  backgroundColor,
  primaryColor,
  secondaryColor,
  textColor,
} from "./consts";

export default function App() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selecting, setSelecting] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const onPress = () => {
    if (taskTitle) {
      setTasks([...tasks, { title: taskTitle, completed: false }]);
      setTaskTitle("");
      Keyboard.dismiss();
    }
  };

  const taskPress = (i) => {
    if (!selecting) {
      // Update tasks
      const newTasks = tasks.map((task, index) => {
        if (i === index) {
          const taskUpdate = {
            ...task,
            completed: !task.completed,
          };

          return taskUpdate;
        }

        return task;
      });

      setTasks(newTasks);
    } else {
      let newSelectedTasks = selectedTasks;
      tasks.map((task, index) => {
        if (index === i) {
          if (!newSelectedTasks.includes(task)) newSelectedTasks.push(task);
          else newSelectedTasks.splice(index, 1);
        }
        return newSelectedTasks;
      });

      setSelectedTasks(newSelectedTasks);
      console.log(selectedTasks);
    }
  };

  const taskLongPress = (i) => {
    // Delete a task
    // setTasks(tasks.filter((task, index) => i !== index));
    setSelecting(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tasks Container */}
      <View style={styles.tasksContainer}>
        {/* App header */}
        <View style={styles.header}>
          {selecting ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setSelecting(false)}
            >
              <FeatherIcon
                name="arrow-left"
                size={27}
                color={textColor}
              ></FeatherIcon>
            </TouchableOpacity>
          ) : null}
          <Text style={styles.headerText}>Your Tasks</Text>
        </View>

        {/* Container for task items list */}
        <ScrollView style={styles.items}>
          {tasks.map((task, i) => {
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => taskPress(i)}
                onLongPress={() => taskLongPress(i)}
              >
                <Task
                  key={i}
                  title={task.title}
                  completed={task.completed}
                  selecting={selecting}
                ></Task>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Task adding input container */}
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.taskInput}
          placeholder="Task to do..."
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
        ></TextInput>

        {/* Add Task Button */}
        <TouchableOpacity onPress={onPress}>
          <View style={styles.addTaskButton}>
            <Icon name="plus" size={25} color={secondaryColor}></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
  },
  tasksContainer: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  items: {
    marginTop: 10,
    maxHeight: "90%",
  },
  addTaskContainer: {
    position: "absolute",
    paddingHorizontal: 15,
    width: "100%",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  taskInput: {
    backgroundColor: secondaryColor,
    borderRadius: 15,
    paddingHorizontal: 20,
    width: 300,
    height: 50,
    justifyContent: "center",
    fontSize: 16,
    shadowColor: "#222",
    shadowOpacity: 0.3,
    shadowRadius: 30,
  },
  addTaskButton: {
    backgroundColor: primaryColor,
    fontWeight: "bold",
    width: 50,
    height: 50,
    paddingBottom: 2,
    borderRadius: 60,
    shadowColor: "#222",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
