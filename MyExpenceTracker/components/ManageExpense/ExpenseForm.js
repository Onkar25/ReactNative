import { StyleSheet, View, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  const formIsInvalid =
    !inputValues.amount.isValid ||
    !inputValues.date.isValid ||
    !inputValues.description.isValid;

  function confirmHandler() {
    const expenseData = {
      amount: +inputValues.amount.value,
      date: new Date(inputValues.date.value),
      description: inputValues.description.value,
    };

    const validateAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const validateDate = expenseData.date.toString() !== "Invalid Date";
    const validateDesc = expenseData.description.trim().length > 0;

    if (!validateAmount || !validateDate || !validateDesc) {
      // Alert.alert("Invalid Input", "Please enter valid data");
      setInputValues((currentInput) => {
        return {
          amount: { value: currentInput.amount.value, isValid: validateAmount },
          date: { value: currentInput.date.value, isValid: validateDate },
          description: {
            value: currentInput.description.value,
            isValid: validateDesc,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Your Expense </Text>
      <View style={styles.inputContainer}>
        <Input
          label="Amount"
          style={styles.rowInput}
          inValid={!inputValues.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          inValid={!inputValues.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        inValid={!inputValues.description.isValid}
        textInputConfig={{
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input , Please enter valid data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    color: "white",
    textAlign: "center",
    margin: 8,
  },
});
