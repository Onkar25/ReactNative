import { createDrawerNavigator } from "@react-navigation/drawer";
import DailyTaskTabs from "./DailyTask/DailyTaskTabs";
const Drawer = createDrawerNavigator();
function FlyoutDrawer() {
  return (

    <Drawer.Navigator>
      <Drawer.Screen name="Daily Task" component={DailyTaskTabs} />
    </Drawer.Navigator>

  );
}

export default FlyoutDrawer;