import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteTask from "./FavoriteTasks";
import TaskList from "./TasksList";
import IconButton from "../../components/UI/IconButtons";
const MyTabs = createBottomTabNavigator();
function DailyTaskTabs() {
  return (

    <MyTabs.Navigator screenOptions={{ headerShown: false }}>
      <MyTabs.Screen name="Daily Task" component={TaskList} options={{
        tabBarIcon: ({ color, size }) => (
          <IconButton iconName="list" color={color} size={size} />
        ),
      }} />
      <MyTabs.Screen name="Favorite Task" component={FavoriteTask} options={{
        tabBarIcon: ({ color, size }) => (
          <IconButton iconName="star" color={color} size={size} />
        ),
      }} />
    </MyTabs.Navigator>

  );
}

export default DailyTaskTabs;