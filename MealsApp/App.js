import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from '../MealsApp/screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar styles='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealCatogories'>
          <Stack.Screen name='MealOverview' component={MealOverviewScreen} />
          <Stack.Screen name='MealCatogories' component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
