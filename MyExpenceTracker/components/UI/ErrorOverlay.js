import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from '../UI/Button';
function ErrorOverlay({ message, onConfirm }) {
  return <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An Error occured</Text>
    <Text style={styles.text}>{message}</Text>
    <Button onPress={onConfirm}>Ok</Button>
  </View>
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: GlobalStyles.colors.primary700
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});