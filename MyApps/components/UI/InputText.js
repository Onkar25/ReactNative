import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../constants/colors";

function InputText({ title, value, onValueChange }) {
  const placeholder = `Enter ${title}`;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.label}>{title}:</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onValueChange}  // This now matches the parent
      />
    </View>
  );
}
export default InputText;
const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primaryBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
});