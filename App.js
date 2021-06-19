import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableHighlight } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Tasks Container */}
      <View style={styles.tasksContainer}>
        <Text style={styles.headerText}>Your Tasks</Text>

        {/* Container for task items list */}
        <View style={styles.items}>
          <Task title="Make a todo app"/>
          <Task title="Learn React Native" />
          <Task title="Code" />
        </View> 

      </View>

      {/* Task adding input container */}
      <View style={styles.addTaskContainer}>
        <TextInput style={styles.taskInput} placeholder="Task to do..."></TextInput>

        {/* Add Task Button */}
        <TouchableHighlight>
          <View style={styles.addTaskButton}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 30}}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
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
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    fontSize: 16
  },
  addTaskButton: {
    backgroundColor: '#f92ccd',
    fontWeight: 'bold',
    width: 50,
    height: 50,
    paddingBottom: 2,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
