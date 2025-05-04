import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../constants/colors";
import { Ionicons } from '@expo/vector-icons'
import { Swipeable } from "react-native-gesture-handler";
import { deleteTaskById } from "../../../repository/TaskRepository";
import { handleDelete } from "../../../screens/DailyTask/TasksList";
function TaskListItem({ task, navigation }) {
  async function deleteTask() {
    try {
      handleDelete(task.id);
    } catch (error) {
      console.log(error);
    }

  }

  function editTask() {
    navigation.navigate('AddTask', { task: task });
  }
  const renderActions = () => (
    <View style={styles.swipeContainer}>
      <TouchableOpacity style={[styles.swipeItem, styles.editItem]} onPress={editTask}>
        <Text style={styles.swipeText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.swipeItem, styles.deleteItem]} onPress={deleteTask}>
        <Text style={styles.swipeText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <Swipeable renderRightActions={renderActions}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={[styles.text]}>{task.Title}</Text>
          <Text style={[styles.text]}>{task.Description}</Text>
        </View>
        <View>
          <View style={styles.dateContainer}>
            {/* <Ionicons name='calendar-outline' size='10' color={Colors.darkBlue} /> */}
            <Text style={[styles.text]}>{task.Taskdate}</Text>
          </View>
          <View style={styles.timeContainer}>
            {/* <Ionicons name='time-outline' size='10' color={Colors.darkBlue} /> */}
            <Text style={[styles.text]}>{task.Tasktime}</Text>
          </View>
        </View>
      </View >
    </Swipeable>
  );
}

export default TaskListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    marginBottom: 8,
    backgroundColor: Colors.lightBackground,
    color: Colors.lightBlue,
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: Colors.darkBlue,
    borderWidth: 1,
    shadowColor: Colors.darkBlue,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  text: {
    color: Colors.primaryBlue
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  swipeContainer: {
    flexDirection: 'row',
    marginBottom: 8
  },
  swipeItem: {
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editItem: {
    backgroundColor: 'orange',
  },
  deleteItem: {
    backgroundColor: 'red',
  },
  swipeText: {
    color: 'white'
  }
});