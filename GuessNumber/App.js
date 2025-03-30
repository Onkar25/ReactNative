
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [useNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  function pickedNumberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onConfirmed={pickedNumberHandler} />;
  if (useNumber) {
    screen = <GameScreen choseNumber={useNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && useNumber) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2]}
      style={styles.mainContainer}>
      <ImageBackground style={styles.mainContainer}
        source={require('./assets/background.png')} resizeMode='cover'
        imageStyle={styles.imageContainer}>
        <SafeAreaView style={styles.mainContainer}>
          {screen}
        </SafeAreaView>

      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  imageContainer: {
    opacity: 0.5
  }
});
