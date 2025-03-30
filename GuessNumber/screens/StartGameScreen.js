import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";

function StartGame({ onConfirmed }) {

  const [enterNumber, setEnterNumber] = useState('');

  function onTextChangeHandler(enteredValue) {
    setEnterNumber(enteredValue);
  }
  function confirmInputHandler() {
    const chosenNumber = Number(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Alert', 'Please entered valid number between 1 and 99',
        [{ text: 'Ok', style: 'cancel', onPress: resetInputHandler }]
      );
      return;
    }
    onConfirmed(chosenNumber);
  }
  function resetInputHandler() {
    setEnterNumber('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
        maxLength={2} keyboardType="number-pad" autoCapitalize="none"
        value={enterNumber}
        onChangeText={onTextChangeHandler}
        autoCorrect={false} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonPressed={resetInputHandler}>Reset</PrimaryButton></View>
        <View style={styles.buttonContainer}>
          <PrimaryButton buttonPressed={confirmInputHandler}>Confirm</PrimaryButton></View>
      </View>
    </View>
  );
}
export default StartGame;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    // this are iOS related
    shadowColor: Colors.darkColor,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.25

  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary1,
    borderBottomWidth: 2,
    color: Colors.secondary1,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
});