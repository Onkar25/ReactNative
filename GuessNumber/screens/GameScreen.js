import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
function GameScreen({ choseNumber, onGameOver }) {
  const initialState = generateRandomBetween(1, 100, choseNumber);
  const [currentGuess, setCurrentGuess] = useState(initialState);

  useEffect(() => {
    if (choseNumber == currentGuess) {
      onGameOver();
    }
  }, [choseNumber, currentGuess, onGameOver]);

  function nextGuessNumber(direction) {
    if ((direction === 'lower' && currentGuess < choseNumber) ||
      (direction === 'greater' && currentGuess > choseNumber)
    ) {
      Alert.alert("Don't lie", " You know that this is wrong ... ",
        [{ text: 'Sorry!!!', style: 'cancel' }]
      );
      return;
    }
    if (direction === 'lower') {
      maxBoundry = currentGuess;
    }
    else {
      minBoundry = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View View style={styles.mainContainer} >
      <Title> Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton buttonPressed={nextGuessNumber.bind(this, 'lower')}> - </PrimaryButton>
        <PrimaryButton buttonPressed={nextGuessNumber.bind(this, 'greater')}> +</PrimaryButton>
      </View>
      <View>
        <Text> View Logs </Text>
      </View>
    </View>);

}

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 25,
    padding: 24,
  },
});
