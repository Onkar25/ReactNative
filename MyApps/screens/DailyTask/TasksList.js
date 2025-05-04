import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { CreateTaskTable, fetchAllPlaces } from "../../repository/TaskRepository";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import TaskListItem from "../../components/UI/DailyTask/TaskListItem";
function TaskList({ navigation }) {
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function GetAllTask() {
      try {
        await CreateTaskTable();
        const tasksList = await fetchAllPlaces();
        // Only add tasks that are not already in the state
        setTasks((curr) => {
          const newTasks = tasksList.filter(
            (task) => !curr.some((t) => t.id === task.id) // assuming each task has a unique id
          );
          return [...curr, ...newTasks];
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (isFocused) {
      GetAllTask();
    }
  }, [isFocused]);


  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);

  function AddTaskNavigate() {
    navigation.navigate('AddTask');
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
          renderItem={({ item }) => (
            <TaskListItem task={item} />
          )}
          ListEmptyComponent={<Text>No tasks found</Text>}
        />
      </View>
      <Button title="Add Task" style={styles.button} onPress={AddTaskNavigate} />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  taskList: {
    flex: 9,
    backgroundColor: Colors.secondaryBlue,
    padding: 10,
  },
  button: {
    flex: 1,
  }
});