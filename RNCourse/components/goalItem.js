import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)} android_ripple={{ color: "grey" }}>
      <View style={styless.goalItems}>
        <Text style={styless.goalText}>{props.textData}</Text>
      </View>
    </Pressable>
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
