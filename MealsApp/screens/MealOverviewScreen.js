import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealList from "../components/MealList";
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

  return <MealList displayMeals={displayMeals} />
}

export default MealOverviewScreen;


