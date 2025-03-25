import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
export default function App() {

  const [goalList, updateGoalList] = useState([]);

  function addGoalHandler(enterGoalText) {
    // updateGoalList([...goalList, enterGoalText]); // Old Appraoch
    updateGoalList((currentGoal) => [
      ...currentGoal,
      { text: enterGoalText, key: Math.random().toString() },
    ]);

    // console.log(goalList.length);
  }


  return (
    <View style={styles.container}>

      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.listContainer}>
        {/* <ScrollView>
          {goalList.map((goal) => (
            <View key={goal.key} style={styles.goalItems}>
              <Text style={styles.goalText}>{goal.text}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => item.key}
          renderItem={(itemData) => {
            return <GoalItem key={itemData.key} textData={itemData.item.text} />;
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  listContainer: {
    flex: 4,
    padding: 20,
  },


});