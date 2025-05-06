import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';

export async function registerForPushNotificationsAsync() {
  try {
    if (!Device.isDevice) {
      alert('Must use physical device for Push Notifications');
      return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    // const tokenData = await Notifications.getExpoPushTokenAsync({
    //   projectId: Constants.expoConfig.extra.eas.projectId,
    // });
    const tokenData = await Notifications.getDevicePushTokenAsync();
    const token = tokenData?.data;

    console.log('Expo Push Token:', token);
    return token;
  } catch (error) {
    console.error('Push registration error:', error);
  }
}