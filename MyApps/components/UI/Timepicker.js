import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Timepicker({ time, onTimeChange }) {
  const [pickerTime, setPickerTime] = useState(time);
  const [showPicker, setShowPicker] = useState(false);

  function timeChangeHandler(event, selectedTime) {
    if (event.type === "set") {
      onTimeChange(selectedTime);
      setPickerTime(selectedTime);
    }
    setShowPicker(Platform.OS === "ios"); // iOS keeps picker open
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <Icon name="clock-outline" size={18} color={Colors.darkBlue} /> Time
      </Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setShowPicker(true)}>
        <Text style={styles.textStyle}>
          {pickerTime ? pickerTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "Select a time"}
        </Text>
        <Icon name="chevron-down" size={20} color={Colors.darkBlue} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={pickerTime || new Date()}
          mode="time"
          is24Hour={true}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={timeChangeHandler}
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