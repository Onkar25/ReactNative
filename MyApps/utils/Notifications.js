import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

export async function registerForPushNotificationsAsync() {
  try {
    if (!Device.isDevice) {
      alert("Must use physical device for Push Notifications");
      return;
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    // const tokenData = await Notifications.getExpoPushTokenAsync({
    //   projectId: Constants.expoConfig.extra.eas.projectId,
    // });
    const tokenData = await Notifications.getDevicePushTokenAsync();
    const token = tokenData?.data;

    return token;
  } catch (error) {
    console.error("Push registration error:", error);
  }
}

export async function scheduleTaskNotification(
  dateTime,
  title = "Task Reminder",
  body = "It's time for your task!"
) {
  const timestamp = dateTime.getTime();
  const currentTime = Date.now();
  if (timestamp <= currentTime) {
    console.error("The scheduled time must be in the future.");
    return;
  }
  const triggers = {
    hour: 14, // 2 PM
    minute: 13,
    second: 0,
    repeats: true, // Set to true for repeating notifications
  };
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: triggers,
    // {
    //   type: "date",

    //   timestamp: timestamp, // Use the timestamp of the date
    // },
  });
}

export function triggerNotification() {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "📅 Task Reminder",
      body: "You have a task scheduled!",
      sound: true,
    },
    trigger: {
      seconds: 2, // Delay by 2 seconds
    },
  });
}
/*
    
// Example: Assume `taskDateTime` is a Date object (e.g., from datepicker & timepicker)
Schedule Locatl Notification
const taskDateTime = new Date(2025, 4, 7, 15, 30); // 7 May 2025, 3:30 PM
scheduleTaskNotification(taskDateTime, "📝 Upcoming Task", "Don't forget: Complete your task by 3:30 PM!");

Single Local Notification
triggerNotification();    
*/
