import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import {
  CreateTaskTable,
  deleteTaskById,
  fetchAllTasks,
} from "../../repository/TaskRepository";
import { useEffect, useLayoutEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "../../components/UI/DailyTask/TaskListItem";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import dayjs from 'dayjs';
import { timeStringToDate } from "../../utils/Converters";
function TaskList({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.name === 'Favorite Task' ? 'Favorite Tasks' : 'Daily Tasks',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route.name]);
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
      const tasksList = await fetchAllTasks();
      setTasks(tasksList);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDelete = async (taskId) => {
    try {
      await deleteTaskById(taskId);
      const updatedTasks = await fetchAllTasks();
      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };
  const today = dayjs().format('YYYY-MM-DD');
  const filteredTasks = tasks.filter(task => {
    const date = timeStringToDate(task.Taskdate, task.Tasktime);
    const taskDate = dayjs(date).format('YYYY-MM-DD');
    if (route.name === 'Favorite Task') {
      return taskDate === today;
    }
    return true;
  });

  function AddTaskNavigate() {
    navigation.navigate("AddTask");
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskList}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskListItem task={item} navigation={navigation} onDelete={() => handleDelete(item.id)} />
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