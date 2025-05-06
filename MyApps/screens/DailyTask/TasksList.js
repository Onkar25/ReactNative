import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import {
  CreateTaskTable,
  deleteTaskById,
  fetchAllPlaces,
} from "../../repository/TaskRepository";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "../../components/UI/DailyTask/TaskListItem";

export const handleDelete = async (taskId, setTasks) => {
  try {
    console.log("DELETE TASK : " + taskId);
    await deleteTaskById(taskId); // your DB delete function
    const updatedTasks = await fetchAllPlaces(); // fetch fresh list
    setTasks(updatedTasks); // update FlatList data
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};

function TaskList({ navigation }) {
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState();
  useEffect(() => {
    if (isFocused) {
      GetAllTask();
    }
  }, [isFocused]);
  async function GetAllTask() {
    try {
      await CreateTaskTable();
      const tasksList = await fetchAllPlaces();
      setTasks(tasksList);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   if (tasks) {
  //     console.log("Updated tasks:", tasks);
  //   }

  // }, [tasks]);

  function AddTaskNavigate() {
    navigation.navigate("AddTask");
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskListItem task={item} navigation={navigation} />
          )}
          ListEmptyComponent={<Text>No tasks found</Text>}
        />
      </View>
      <Button
        title="Add Task"
        style={styles.button}
        onPress={AddTaskNavigate}
      />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  taskList: {
    flex: 9,
    backgroundColor: Colors.secondaryBlue,
    padding: 10,
  },
  button: {
    flex: 1,
  },
});

/*
const { setTasks } = useTasks();

✅ To make that work, you need:

1. A proper TaskContext.js setup
// TaskContext.js
import React, { createContext, useContext, useState } from 'react';
import { fetchAllPlaces } from './repository/TaskRepository';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await fetchAllPlaces();
    setTasks(data);
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

In App.js:
import { TaskProvider } from './TaskContext'; // adjust the path

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        
        </NavigationContainer>
        </TaskProvider>
      );
    }

*/
