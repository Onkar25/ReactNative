import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
function MealOverviewScreen({ route }) {
  // const catId = route.params.categoryID;
  const routes = useRoute();
  const catIDs = routes.params.categoryID;
  const displayMeals = MEALS.filter((mealItem) => { return mealItem.categoryIds.indexOf(catIDs) >= 0 });

  function renderMealItem(itemData) {
    return <MealItem meal={itemData.item.title} />
  }
  return <View style={styles.container}>
    <FlatList data={displayMeals} keyExtractor={(meal) => meal.id}
      renderItem={renderMealItem} />
  </View>

}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});