
import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native";
function GoalInput(props) {
  const [enterGoalText, setGoalText] = useState('');
  function goalInputHandler(enterText) {
    setGoalText(enterText);

  }

  function addNewGoad() {
    if (!enterGoalText.trim()) return; // Avoid adding empty goals
    props.onAddGoal(enterGoalText);
    setGoalText('');
  }

  return (
    <Modal visible={props.onModalClose} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/favicon.png')} style={styles.imageStyle} />
        <TextInput
          style={styles.textContainer}
          onChangeText={goalInputHandler}
          placeholder="Please enter Goals"
          value={enterGoalText}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add Goals" onPress={addNewGoad} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onModalClosed} />
          </View>
        </View>

      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginBottom: 25,
    margin: 20,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: "column",

  },
  btnContainer: {
    flexDirection: 'row',

  },
  textContainer: {
    borderWidth: 1,
    width: "100%",
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 10,
    padding: 8,
  },
  button: {
    width: '150',
    marginHorizontal: 10
  },
  imageStyle: {
    marginBottom: 50,
    width: 100,
    height: 100
  }

});