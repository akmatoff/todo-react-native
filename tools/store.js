import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTasks = async () => {
  try {
    const result = await AsyncStorage.getItem("tasks");
    if (result) return JSON.parse(result);
    else return [];
  } catch (e) {
    console.error(e);
  }
};

export const saveTasks = async (tasks) => {
  try {
    let jsonTasks = JSON.stringify(tasks);
    await AsyncStorage.setItem("tasks", jsonTasks);
  } catch (e) {
    console.error(e);
  }
};

export const getTaskID = async () => {
  try {
    const result = await AsyncStorage.getItem("taskID");
    if (result) return Number(result);
    else return 0;
  } catch (e) {
    console.error(e);
  }
};

export const saveTaskID = async (taskID) => {
  try {
    await AsyncStorage.setItem("taskID", String(taskID));
  } catch (e) {
    console.error(e);
  }
};
