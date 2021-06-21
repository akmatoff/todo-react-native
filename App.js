import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, TouchableHighlight, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'
import Task from './components/Task'
import { backgroundColor, primaryColor, secondaryColor } from './consts';

export default function App() {
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState([])

  const onPress = () => {
    if (taskTitle) {
      setTasks([...tasks, {title: taskTitle, completed: false}])
      setTaskTitle('')
      Keyboard.dismiss()
      console.log(tasks)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Tasks Container */}
      <View style={styles.tasksContainer}>
        <Text style={styles.headerText}>Your Tasks</Text>

        {/* Container for task items list */}
        <ScrollView style={styles.items}>
          {tasks.map((task, i) => {
            return <Task key={i} title={task.title} completed={task.completed}></Task>
          })}
        </ScrollView> 

      </View>

      {/* Task adding input container */}
      <View style={styles.addTaskContainer}>
        <TextInput style={styles.taskInput} placeholder="Task to do..." value={taskTitle} onChangeText={(text) => setTaskTitle(text)}></TextInput>

        {/* Add Task Button */}
        <TouchableHighlight onPress={onPress}>
          <View style={styles.addTaskButton}>
            <Icon name='plus' size={25} color={secondaryColor}></Icon>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tasksContainer: {
    paddingTop: 50,
    paddingHorizontal: 15
  },
  items: {
    marginTop: 10
  },
  addTaskContainer: {
    position: 'absolute',
    paddingHorizontal: 15,
    width: '100%',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  taskInput: {
    backgroundColor: secondaryColor,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    fontSize: 16
  },
  addTaskButton: {
    backgroundColor: primaryColor,
    fontWeight: 'bold',
    width: 50,
    height: 50,
    paddingBottom: 2,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
 