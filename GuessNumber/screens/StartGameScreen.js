import {
  View,
  StyleSheet,
  TextInput, Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";

function StartGame({ onConfirmed }) {

  const [enterNumber, setEnterNumber] = useState('');

  const { width, height } = useWindowDimensions();

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
  const thresholdHeight = 410;
  const myMarginTop = height < thresholdHeight ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: myMarginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number </InstructionText>
            <TextInput style={styles.numberInput}
              maxLength={2} keyboardType="number-pad" autoCapitalize="none"
              value={enterNumber}
              onChangeText={onTextChangeHandler}
              autoCorrect={false} />
            <View style={styles.buttonsContainer}>
              <PrimaryButton buttonPressed={resetInputHandler}>
                Reset
              </PrimaryButton>
              <PrimaryButton buttonPressed={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
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
});