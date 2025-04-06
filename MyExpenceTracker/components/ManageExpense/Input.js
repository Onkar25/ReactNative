import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, mstyle }) {

  const inputStyles = [styles.inputStyle];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.container, mstyle]}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 8
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
    color: GlobalStyles.colors.primary700
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});