import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontFamily: 'open-sans',
    color: Colors.secondary1
  },
});