import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: true,
  }),
});

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to send notifications not granted!');
          return;
        }

        const expoPushToken = (await Notifications.getExpoPushTokenAsync({
          projectId: 'b77530dc-352b-424f-f730-8300f975178b',
        })).data;
        console.log(expoPushToken);

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.DEFAULT,
          });
        }
      } catch (error) {
        console.log('Error during notification setup:', error);
      }
    })();
  }, []);

  useEffect(() => {
    const receivedSub = Notifications.addNotificationReceivedListener((notification) => {
      console.log("Notification received:");
      console.log(notification);
      console.log(notification?.request?.content?.data?.userName ?? 'No username found');
    });

    const responseSub = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Notification response received:");
      console.log(response);
    });

    return () => {
      receivedSub.remove();
      responseSub.remove();
    };
  }, []);

  function scheduleNotification() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Notification Received',
        body: 'This is the details notification',
        data: { userName: 'crooks' },
      },
      trigger: { seconds: 5 },
    });
  }

  return (
    <View style={styles.container}>
      <Button title='Notify' onPress={scheduleNotification} />
      <StatusBar style="auto" />
    </View>
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