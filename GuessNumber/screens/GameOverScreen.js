import { StyleSheet, Text } from "react-native";

function GameOverScreen() {
  return (
    <Text style={styles.textContainer}>
      GAME IS OVER !!!!
    </Text>)
}

export default GameOverScreen;

const styles = StyleSheet.create({
  textContainer: {
    padding: 30,
    margin: 30,
  }
});