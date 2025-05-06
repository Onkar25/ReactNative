import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Datepicker({ date, onDateChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerDate, setPickerDate] = useState(date);

  function dateChangeHandler(event, selectedDate) {
    if (event.type === "set") {
      onDateChange(selectedDate);
      setPickerDate(selectedDate);
    }
    setShowPicker(Platform.OS === "ios"); // iOS keeps picker open
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <Icon name="calendar" size={18} color={Colors.darkBlue} /> Date
      </Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setShowPicker(true)}>
        <Text style={styles.textStyle}>
          {pickerDate ? pickerDate.toLocaleDateString() : "Select a date"}
        </Text>
        <Icon name="chevron-down" size={20} color={Colors.darkBlue} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={pickerDate || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={dateChangeHandler}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
    color: Colors.darkBlue,
    marginBottom: 6,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  textStyle: {
    fontSize: 16,
    color: "#333",
  },
});