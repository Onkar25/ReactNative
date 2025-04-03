import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoryScreen from "../MealsApp/screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";
import FavrouteContextProvider from "./store/favorites-context";
import { Provider } from "react-redux";
import { reduxStore } from "./store/redux/store";
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    sceneStyle: { backgroundColor: "#24180f" },
  }}>
    <Drawer.Screen name="MealCatogoriesDrawer" component={CategoryScreen} options={{ title: "All Categories" }} />
    <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{ title: "Favorite Items" }} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavrouteContextProvider> */}
      <Provider store={reduxStore}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealCatogories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#24180f" },
            }}
          >
            <Stack.Screen
              name="MealCatogories"
              component={DrawerNavigator}
              options={{ title: "All Categories", headerShown: false }}
            />

            <Stack.Screen
              name="MealOverview"
              component={MealOverviewScreen}
            // options={
            //   ({ route, navigation }) => {
            //     const catId = route.params.categoryID;
            //     return {
            //       title: catId,
            //     };
            //   }}
            />

            <Stack.Screen name="MealDetails" component={MealDetailsScreen}
              options={{
                title: 'About the Meal'
                // headerRight: () => {
                //   return <Button title="Tap Me" />
                // }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavrouteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
