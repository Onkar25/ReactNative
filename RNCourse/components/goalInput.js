
import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
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
    <View style={styles.inputContainer} >
      <TextInput
        style={styles.textContainer}
        onChangeText={goalInputHandler}
        placeholder="Please enter Goals"
        value={enterGoalText}
      />
      <Button title="Add Goals" onPress={addNewGoad} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "red",
    flexWrap: "wrap",
  },
  textContainer: {
    borderWidth: 1,
    width: "60%",
    marginRight: 8,
    padding: 8,
  },
});