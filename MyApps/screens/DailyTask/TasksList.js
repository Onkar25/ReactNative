import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function TaskList() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskList}>
        <Text> List of Task</Text>
      </View>
      <Button title="Add Task" style={styles.button} />

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
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flex: 1,
  }
});