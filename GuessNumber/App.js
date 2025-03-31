
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();
// SplashScreen.setOptions({
//   duration: 1000,
//   fade: true,
// });
export default function App() {

  const [useNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundNumber, setRoundNumber] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    SplashScreen.hide();
  }

  function pickedNumberHandler(pickedNumber) {
    setUseNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setRoundNumber(numberOfRounds);
  }
  function startNewGame() {
    setRoundNumber(0);
    setUseNumber(null);
  }

  let screen = <StartGameScreen onConfirmed={pickedNumberHandler} />;
  if (useNumber) {
    screen = <GameScreen choseNumber={useNumber} onGameOver={gameOverHandler} />
  }
  if (gameIsOver && useNumber) {
    screen = <GameOverScreen roundNumbers={roundNumber} userNumber={useNumber} onStartNewGame={startNewGame} />;
  }
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.gradiant1, Colors.gradiant2]}
        style={styles.mainContainer}>
        <ImageBackground style={styles.mainContainer}
          source={require('./assets/images/background.png')} resizeMode='cover'
          imageStyle={styles.imageContainer}>
          <SafeAreaView style={styles.mainContainer}>
            {screen}
          </SafeAreaView>

        </ImageBackground>
      </LinearGradient>
    </>
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
