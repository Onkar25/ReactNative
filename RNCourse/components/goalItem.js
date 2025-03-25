import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styless.goalItems}> {/* Apply the goalItems style here */}
      <Text style={styless.goalText}>{props.textData}</Text>
    </View>
  );
}

export default GoalItem; // Correct export

const styless = StyleSheet.create({
  goalItems: {
    padding: 8,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "black",
  },
  goalText: {
    color: "white",
  },
});
