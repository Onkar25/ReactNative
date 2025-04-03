import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return <BottonTabs.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
  }}>
    <BottonTabs.Screen name="RecentExpenses" component={RecentExpenses} options={
      {
        title: 'Recent Expenses',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='hourglass' size={size} color={color} />
        )
      }
    } />
    <BottonTabs.Screen name="AllExpence" component={AllExpenses} options={
      {
        title: 'All Expenses',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='calendar' size={size} color={color} />
        )
      }
    } />
  </BottonTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={
            { headerShown: false }
          } />
          <Stack.Screen name='ManageExpence' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}
