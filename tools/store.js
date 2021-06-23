import MMKVStorage from "react-native-mmkv-storage";

const MMKV = new MMKVStorage.Loader().initialize();

const saveTasks = async (tasks) => {
  await MMKV.setArrayAsync("tasks", tasks);
};

const getTasks = async () => {
  return await MMKV.getArrayAsync("tasks");
};

const saveTaskID = async (taskID) => {
  await MMKV.setStringAsync("taskID", taskID);
};

const getTaskID = async () => {
  return await MMKV.getStringAsync("taskID");
};

export { saveTasks, getTasks, saveTaskID, getTaskID };
