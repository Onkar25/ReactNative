import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
export default function App() {

  const [goalList, updateGoalList] = useState([]);
  const [modalPopupIsVisibile, setModalPopup] = useState(false);

  function modalChanged() {
    setModalPopup(true);
  }
  function modalClosed() {
    setModalPopup(false);
  }

  function addGoalHandler(enterGoalText) {
    // updateGoalList([...goalList, enterGoalText]); // Old Appraoch
    updateGoalList((currentGoal) => [
      ...currentGoal,
      { text: enterGoalText, id: Math.random().toString() },
    ]);
    modalClosed();
  }

  function onDeleteHandler(id) {
    console.log("DELETE : " + id);
    updateGoalList((currentGoal) => {
      return currentGoal.filter(gl => gl.id !== id)
    });
  }

  return (
    <View style={styles.container}>

      <Button title="Add Modal" onPress={modalChanged} color='red' />
      {modalPopupIsVisibile &&
        <GoalInput

          onAddGoal={addGoalHandler}
          onModalClosed={modalClosed}
          onModalClose={modalPopupIsVisibile} />
      }

      <View style={styles.listContainer}>
        {
          /* <ScrollView>
            {goalList.map((goal) => (
              <View key={goal.key} style={styles.goalItems}>
                <Text style={styles.goalText}>{goal.text}</Text>
              </View>
            ))}
          </ScrollView> */
        }
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return <GoalItem
              id={itemData.item.id}
              textData={itemData.item.text} onDelete={onDeleteHandler} />;
          }}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    flex: 1,
    padding: 60,
  },
  listContainer: {
    flex: 4,
    padding: 20,
  }
});