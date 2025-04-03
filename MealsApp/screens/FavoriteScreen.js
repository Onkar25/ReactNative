import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { useContext } from "react";
import { FavoriteContext } from "../store/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {

  const favoriteMealContxt = useContext(FavoriteContext);
  const favoriteMeal = MEALS.filter(meal => favoriteMealContxt.ids.includes(meal.id));
  if (favoriteMeal.length === 0) {
    return <View style={styles.rootConteiner}>
      <Text style={styles.text}>No Favorite Item found !!! </Text>
    </View>
  }

  return <MealList displayMeals={favoriteMeal} />
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootConteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});