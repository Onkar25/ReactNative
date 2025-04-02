import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
function MealOverviewScreen({ route, navigation }) {
  // const catId = route.params.categoryID;
  const routes = useRoute();
  const catID = routes.params.categoryID;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });


  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find((cat) => cat.id === catID).title;
    navigation.setOptions({
      title: CategoryTitle
    });
  }, [catID, navigation]);

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

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
