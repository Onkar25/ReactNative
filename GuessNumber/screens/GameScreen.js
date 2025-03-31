import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/numberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";
import Ionicons from '@expo/vector-icons/Ionicons';
import GuesLogItem from "../components/game/guestLogItem";
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
  const [guessNumbers, setGuessNumbers] = useState([]);

  useEffect(() => {
    if (choseNumber == currentGuess) {
      onGameOver(guessNumbers.length);
    }
  }, [choseNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);


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
    setGuessNumbers(prevGuesNumbers => [newRandomNumber, ...prevGuesNumbers]);
  }

  const guestRoundsListLength = guessNumbers.length;
  return (
    <View View style={styles.mainContainer} >
      <Title> Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton buttonPressed={nextGuessNumber.bind(this, 'lower')}>
            <Ionicons name="remove-circle-outline" size={24} />
          </PrimaryButton>
          <PrimaryButton buttonPressed={nextGuessNumber.bind(this, 'greater')}>
            <Ionicons name='add-circle-outline' size={24} />
          </PrimaryButton>
        </View>
      </Card >
      <View style={styles.flatList}>
        {/* {guessNumbers.map(guesNumber => <Text>{guesNumber}</Text>)} */}
        <FlatList

          data={guessNumbers}
          renderItem={(itemData) =>
            <GuesLogItem
              roundNumber={guestRoundsListLength - itemData.index}
              guess={itemData.item} />
          }
          keyExtractor={(item) => item} />
      </View>
    </View >);
}

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  flatList: {
    flex: 1,
    padding: 18
  }
});
