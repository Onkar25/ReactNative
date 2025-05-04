import { Button, Text, View, StyleSheet, Switch } from "react-native";
import InputText from "../../components/UI/InputText";
import Colors from "../../constants/colors";
import { useEffect, useState } from "react";
import { Task } from "../../models/Task";
// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { insertTask, updateTask } from "../../repository/TaskRepository";
let fetchTask;
function AddTask({ route, navigation }) {
  useEffect(() => {
    fetchTask = route.params?.task;
    if (fetchTask) {
      setTitle(fetchTask.Title);
      setDescription(fetchTask.Description);
      if (fetchTask.Tasktime) {
        setIsAlarmEnable(true);
      }
    }
  }, [route.params]);
  const [isAlarmEnable, setIsAlarmEnable] = useState(false);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const [alarmDate, setalarmDate] = useState(new Date());

  const toggleAlarm = () => setIsAlarmEnable(prev => !prev);
  const TitleTextChange = (text) => setTitle(text);
  const DescriptionTextChange = (text) => setDescription(text);

  async function AddTaskHandler() {

    try {
      const task = new Task(Title, Description, isAlarmEnable);
      if (fetchTask) {
        await updateTask(fetchTask.id, task);
      } else {
        await insertTask(task);
      }

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Add Task</Text>
      <InputText title={'Task Name'} value={Title} onValueChange={TitleTextChange} />
      <InputText title={'Task Description'} value={Description} onValueChange={DescriptionTextChange} />
      <View style={styles.alarmContainer}>
        <Text>Alarm</Text>
        <Switch onValueChange={toggleAlarm} value={isAlarmEnable} />
      </View>
      {/* {toggleAlarm && (
        <DateTimePickerAndroid
          mode="single"
          display="spinner"
          value={alarmDate}
        />
      )} */}


      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={AddTaskHandler} />
      </View>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 20,
    backgroundColor: Colors.primaryBlue,
  },
  alarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    // fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  buttonContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 5
  }
});