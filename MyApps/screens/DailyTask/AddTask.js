import { Text, View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import InputText from "../../components/UI/InputText";
import Colors from "../../constants/colors";
import { useEffect, useState } from "react";
import { Task } from "../../models/Task";
import { insertTask, updateTask } from "../../repository/TaskRepository";
import Datepicker from "../../components/UI/Datepicker";
import Timepicker from "../../components/UI/Timepicker";
import { timeStringToDate } from "../../utils/Converters";
import {
  scheduleLocalNotification,
  scheduleTaskNotification,
} from "../../utils/Notifications";

let fetchTask;

function AddTask({ route, navigation }) {
  useEffect(() => {
    fetchTask = route.params?.task;
    if (fetchTask) {
      setTitle(fetchTask.Title);
      setDescription(fetchTask.Description);

      const date = timeStringToDate(fetchTask.Taskdate, fetchTask.Tasktime);
      setalarmTime(date);
      setalarmDate(date);

      if (fetchTask.Tasktime) {
        setIsAlarmEnable(true);
      }
    }
  }, [route.params]);

  const [isAlarmEnable, setIsAlarmEnable] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [alarmDate, setalarmDate] = useState(new Date());
  const [alarmTime, setalarmTime] = useState(new Date());

  const toggleAlarm = () => setIsAlarmEnable((prev) => !prev);
  const TitleTextChange = (text) => setTitle(text);
  const DescriptionTextChange = (text) => setDescription(text);

  async function AddTaskHandler() {
    try {
      const task = new Task(
        Title,
        Description,
        alarmDate.toLocaleDateString(),
        alarmTime.toLocaleTimeString()
      );
      if (fetchTask) {
        await updateTask(fetchTask.id, task);
      } else {

        // const taskDateTime = new Date(
        //   alarmTime.getFullYear(),
        //   alarmTime.getMonth(),
        //   alarmTime.getDate(),
        //   alarmTime.getHours(),
        //   alarmTime.getMinutes(),
        //   alarmTime.getSeconds()
        // );

        // await scheduleTaskNotification(
        //   taskDateTime,
        //   "📝 Upcoming Task",
        //   "Don't forget: Complete your task by 3:30 PM!"
        // );
        // await scheduleLocalNotification(alarmTime);

        await insertTask(task);
      }
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>📝 Add Task</Text>

      <View style={styles.card}>
        <InputText
          title={"Task Name"}
          value={Title}
          onValueChange={TitleTextChange}
        />
        <InputText
          title={"Task Description"}
          value={Description}
          onValueChange={DescriptionTextChange}
        />
      </View>

      <View style={[styles.card, styles.alarmCard]}>
        <View style={styles.alarmContainer}>
          <Text style={styles.label}>⏰ Set Alarm</Text>
          <Switch onValueChange={toggleAlarm} value={isAlarmEnable} />
        </View>

        {isAlarmEnable && (
          <View>
            <Datepicker date={alarmDate} onDateChange={setalarmDate} />
            <Timepicker time={alarmTime} onTimeChange={setalarmTime} />
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={AddTaskHandler}>
        <Text style={styles.buttonText}>
          {fetchTask ? "Update Task" : "Add Task"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddTask;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.primaryBlue,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    marginBottom: 20,
  },
  label: {
    color: Colors.primaryBlue,
    fontWeight: "600",
    fontSize: 16,
  },
  alarmContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  alarmCard: {
    backgroundColor: "#f8f9fa",
  },
  button: {
    backgroundColor: "#ff914d",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
