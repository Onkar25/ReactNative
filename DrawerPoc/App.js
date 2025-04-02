import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserScreen from './screens/UserScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Drawer = createDrawerNavigator();
const MyTabs = createBottomTabNavigator();
export default function App() {
  return (<NavigationContainer>
    <MyTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: 'red' },
      headerTintColor: 'white',
      // drawerLabel: 'New Name Welcome',
      // drawerActiveBackgroundColor: 'yellow',
      // drawerActiveTintColor: 'green',
      // drawerStyle: {
      //   backgroundColor: 'grey'
      // }
    }}>
      <MyTabs.Screen name='Welcome' component={WelcomeScreen} options={
        {
          tabBarLabel: 'Welcome',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
          // drawerLabel: 'Welcome',
          // drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }
      } />
      <MyTabs.Screen name='UserScreen' component={UserScreen} options={
        {
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
          // drawerLabel: 'User',
          // drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
        }} />
    </MyTabs.Navigator>
  </NavigationContainer>);
}