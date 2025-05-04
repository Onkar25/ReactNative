import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";
import { Ionicons } from '@expo/vector-icons'
function TaskListItem({ task }) {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={[styles.text]}>{task.Title}</Text>
        <Text style={[styles.text]}>{task.Description}</Text>
      </View>
      <View>
        <View style={styles.dateContainer}>
          <Ionicons name='calendar-outline' size='10' color={Colors.darkBlue} />
          <Text style={[styles.text]}>{task.Taskdate}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Ionicons name='time-outline' size='10' color={Colors.darkBlue} />
          <Text style={[styles.text]}>{task.Tasktime}</Text>
        </View>
      </View>
    </View >
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
    borderRadius: 8,
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
  }
});