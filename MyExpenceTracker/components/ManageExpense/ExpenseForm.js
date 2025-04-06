import { StyleSheet, View } from "react-native";
import Input from "./Input";




function ExpenseForm() {
  function amountChangeHandler() {

  }

  return (
    <View>
      <View style={styles.inputRoute}>
        <Input label="Amount" textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: { amountChangeHandler },
          mstyle: { styles.rowInput }
        }} />
        <Input label="Date" textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => { },
          mstyle: { styles.rowInput }
        }} />
      </View>
      <Input label="Description" textInputConfig={{
        multiline: true,
        autoCorrect: false,
        autoCapitalize: 'none',
      }} />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputRoute: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowInput: {
    flex: 1,

  }
});