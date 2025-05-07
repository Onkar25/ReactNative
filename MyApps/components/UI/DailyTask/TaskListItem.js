import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../constants/colors";
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from "react-native-gesture-handler";
import { handleTaskDelete } from "../../../screens/DailyTask/TasksList";

function TaskListItem({ task, navigation, onDelete }) {

  function editTask() {
    navigation.navigate('AddTask', { task: task });
  }

  const renderActions = () => (
    <View style={styles.swipeContainer}>
      <TouchableOpacity style={[styles.swipeItem, styles.editItem]} onPress={editTask}>
        <Ionicons name="create-outline" size={24} color="green" />
        <Text style={styles.swipeText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.swipeItem, styles.deleteItem]} onPress={onDelete}>
        <Ionicons name="trash-outline" size={24} color="red" />
        <Text style={styles.swipeText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable renderRightActions={renderActions}>
      <View style={styles.mainContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{task.Title}</Text>
          <Text style={styles.description}>{task.Description}</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Ionicons name='calendar-outline' size={14} color={Colors.darkBlue} />
            <Text style={styles.text}>{task.Taskdate}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Ionicons name='time-outline' size={14} color={Colors.darkBlue} />
            <Text style={styles.text}>{task.Tasktime}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

export default TaskListItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 10,
    backgroundColor: Colors.lightBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
    shadowColor: Colors.darkBlue,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  content: {
    flex: 2,
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primaryBlue,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.primaryBlue,
  },
  dateTimeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.primaryBlue,
  },
  swipeContainer: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
  },
  swipeItem: {
    width: 100,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  editItem: {
    backgroundColor: '#FFD700', // Gold color for edit button
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteItem: {
    backgroundColor: '#FF6347', // Tomato color for delete button
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
});