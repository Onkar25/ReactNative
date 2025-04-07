import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style, inValid }) {
  const inputStyles = [styles.inputStyle];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.textStyle, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 8,
  },
  textStyle: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 5,
  },
  inputStyle: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
