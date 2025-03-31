import { Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundNumbers, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.mainContainer}>
        <Title> GAME IS OVER !!!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image source={require('../assets/images/success.png')} style={styles.image} ></Image>
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>{roundNumbers} </Text>
          rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton buttonPressed={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;
// const deviceWidth = Dimensions.get('window').width;
// const thresholdWidth = 412;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  summaryText: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginVertical: 18,
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
    margin: 15,
  },
  imageContainer: {
    // borderRadius: deviceWidth < thresholdWidth ? 75 : 150,
    // width: deviceWidth < thresholdWidth ? 150 : 300,
    // height: deviceWidth < thresholdWidth ? 150 : 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderBlockColor: Colors.primary1,
    marginVertical: 25,
  },
  image: {
    height: '100%',
    width: '100%',
  }
});