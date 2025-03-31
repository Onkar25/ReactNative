import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundNumbers, userNumber, onStartNewGame }) {
  return (
    <View style={styles.mainContainer}>
      <Title> GAME IS OVER !!!!</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image} ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{roundNumbers} </Text>
        rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton buttonPressed={onStartNewGame}>Start New Game</PrimaryButton>
    </View >
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  summaryText: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginVertical: 36,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 30,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderBlockColor: Colors.primary1,
    marginVertical: 30,
  },
  image: {
    height: '100%',
    width: '100 %',
  }
});