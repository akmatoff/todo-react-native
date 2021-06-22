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
  const [select, setSelect] = useState(false); // Need it to update state on selection. Don't know why it didn't work with it
  const [taskID, setTaskID] = useState(0);

  const addTaskPress = () => {
    if (taskTitle) {
      setTasks([...tasks, { id: taskID, title: taskTitle, completed: false }]);
      setTaskTitle("");
      Keyboard.dismiss();
      setTaskID(taskID + 1);
    }
  };

  const taskPress = (id) => {
    if (!selecting) {
      // Update tasks
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
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
      // Save selected tasks to an array
      let newSelectedTasks = selectedTasks;
      tasks.map((task) => {
        if (task.id === id) {
          if (!newSelectedTasks.includes(task)) newSelectedTasks.push(task);
          else newSelectedTasks.splice(newSelectedTasks.indexOf(task), 1);
        }
        return newSelectedTasks;
      });

      setSelectedTasks(newSelectedTasks);
      setSelect(!select);
      console.log("Selected tasks:", selectedTasks);
    }
  };

  const taskLongPress = (id) => {
    setSelecting(true);
  };

  const taskDelete = () => {
    setTasks(tasks.filter((task) => !selectedTasks.includes(task)));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tasks Container */}
      <View style={styles.tasksContainer}>
        {/* App header */}
        <View style={styles.header}>
          {/* Arrow left - button to deselect */}
          {selecting ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setSelecting(false);
                setSelectedTasks([]);
              }}
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
          {tasks.map((task) => {
            return (
              <TouchableOpacity
                key={task.id}
                activeOpacity={0.8}
                onPress={() => taskPress(task.id)}
                onLongPress={() => taskLongPress(task.id)}
              >
                <Task
                  key={task.id}
                  task={task}
                  selecting={selecting}
                  selectedTasks={selectedTasks}
                  select={select}
                ></Task>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Task adding input container */}
      {!selecting ? (
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="Task to do..."
            value={taskTitle}
            onChangeText={(text) => setTaskTitle(text)}
          ></TextInput>

          {/* Add Task Button */}
          <TouchableOpacity onPress={addTaskPress}>
            <View style={styles.addTaskButton}>
              <Icon name="plus" size={22} color={secondaryColor}></Icon>
            </View>
          </TouchableOpacity>
        </View>
      ) : selectedTasks.length > 0 ? (
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={taskDelete}>
            <FeatherIcon
              name="trash-2"
              size={27}
              color={primaryColor}
            ></FeatherIcon>
          </TouchableOpacity>
        </View>
      ) : null}
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
  bottomContainer: {
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
