import { createDrawerNavigator } from "@react-navigation/drawer";
import DailyTaskTabs from "./DailyTask/DailyTaskTabs";
const Drawer = createDrawerNavigator();
function FlyoutDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false, // hides the default drawer header
    }}>
      <Drawer.Screen name="Tasks" component={DailyTaskTabs} />
    </Drawer.Navigator>
  );
}

export default FlyoutDrawer;