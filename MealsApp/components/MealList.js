import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealList({ displayMeals }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordabilty: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    function pressHandler() {
      // navigation.navigate('MealDetails', {
      //   mealID: itemData.item.id,
      // });
    }
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});