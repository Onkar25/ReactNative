import { Text, StyleSheet } from "react-native";
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
    fontWeight: 'bold',
    color: Colors.secondary2,
    borderWidth: 2,
    borderColor: Colors.secondary2,
    padding: 12,
  }
});