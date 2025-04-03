import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
// import { FavoriteContext } from "../store/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { AddFavorite, RemoveFavorite } from "../store/redux/favorite";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealID;
  const mealData = MEALS.find((meal) => meal.id === mealId);
  // const favContext = useContext(FavoriteContext);
  // const mealIsFavorite = favContext.ids.includes(mealId);

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.Ids);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);
  const dispatch = useDispatch();
  function onHeaderButtonPressed() {
    console.log(mealIsFavorite);
    // console.log(favContext.ids);
    if (mealIsFavorite) {
      // favContext.removeFavorites(mealId);
      dispatch(RemoveFavorite({ id: mealId }));
    } else {
      // favContext.addFavorites(mealId);
      dispatch(AddFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:
        () => {
          //return <Button title="Tap Me" onPress={onHeaderButtonPressed} />
          return <IconButton
            onPress={onHeaderButtonPressed}
            name={mealIsFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color='red' />
        }
    }, [navigation, onHeaderButtonPressed])
  });

  // console.log(mealData);
  return (
    <ScrollView>
      <View>
        <Image source={{ uri: mealData.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{mealData.title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>{mealData.duration}min</Text>
        <Text style={styles.detailsItem}>{mealData.complexity.toUpperCase()}</Text>
        <Text style={styles.detailsItem}>{mealData.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredents</Text>
      {mealData.ingredients.map((ingred) => (
        <View style={styles.steps}>
          <Text style={styles.detailsItem} key={ingred}>{ingred}</Text>
        </View>
      ))}
      <Text style={styles.title}>Steps</Text>
      {mealData.steps.map((step) => (
        <View style={styles.steps}>
          <Text style={styles.detailsItem} key={step}>{step}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: 'white',
    margin: 8,
    borderBottomColor: 'white',
    borderWidth: 2,
    borderRadius: 8
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 5,
    color: 'white',
    textAlign: "center",
    fontSize: 12,
  },
  steps: {
    margin: 5,
    backgroundColor: "#33fe",
    borderRadius: 9,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6
  }
});