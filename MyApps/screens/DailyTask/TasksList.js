import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Notifications from 'expo-notifications';
export const handleDelete = async (taskId, setTasks) => {
  try {
    await deleteTaskById(taskId);
    const updatedTasks = await fetchAllPlaces();
    setTasks(updatedTasks);
  } catch (err) {
    console.error("Error deleting task:", err);
  }
};

function TaskList({ navigation }) {
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState([]);

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

  function AddTaskNavigate() {
    // navigation.navigate("AddTask");
    triggerNotification();

    /*
    // Example: Assume `taskDateTime` is a Date object (e.g., from datepicker & timepicker)
const taskDateTime = new Date(2025, 4, 7, 15, 30); // 7 May 2025, 3:30 PM

scheduleTaskNotification(taskDateTime, "📝 Upcoming Task", "Don't forget: Complete your task by 3:30 PM!");
    */
  }

  async function scheduleTaskNotification(dateTime, title = "Task Reminder", body = "It's time for your task!") {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: true,
      },
      trigger: dateTime, // Date object
    });
  }

  function triggerNotification() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "📅 Task Reminder",
        body: "You have a task scheduled!",
        sound: true,
      },
      trigger: {
        seconds: 2, // Delay by 2 seconds
      },
    });
  }
  return (
    <View style={styles.mainContainer}>

      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskListItem task={item} navigation={navigation} />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>🗒️ No tasks yet. Tap "+" to add one.</Text>
          }
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={AddTaskNavigate}>
        <Icon name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  taskList: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#888",
  },
  fab: {
    position: 'absolute',
    right: 30,
    bottom: 20,
    backgroundColor: Colors.primaryBlue,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6, // For Android
    shadowColor: '#000', // For iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});