import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";
function Title({ children }) {
  return (
    <Text style={styles.title}> {children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    color: Colors.secondary2,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: Colors.secondary2,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  }
});