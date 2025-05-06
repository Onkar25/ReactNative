import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import FlyoutDrawer from "./screens/FlyoutDrawer";
import { NavigationContainer } from "@react-navigation/native";
import AddTask from "./screens/DailyTask/AddTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerForPushNotificationsAsync } from "./utils/Notifications";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const Stack = createNativeStackNavigator();
export default function App() {
  // useEffect(() => {
  //   registerForPushNotificationsAsync();
  // }, []);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission for notifications not granted');
        return;
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.HIGH,
          sound: true,
        });
      }
    }

    requestPermissions();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={FlyoutDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddTask"
            component={AddTask}
            options={{ title: "Add Task" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}