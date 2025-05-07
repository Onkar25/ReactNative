import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteTask from "./FavoriteTasks";
import TaskList from "./TasksList";
import IconButton from "../../components/UI/IconButtons";
const MyTabs = createBottomTabNavigator();
function DailyTaskTabs() {
  return (

    <MyTabs.Navigator
      screenOptions={{
        headerShown: true, // Hides the header for all tab screens
        tabBarStyle: { backgroundColor: '#007bff', height: 60 }, // Custom background color and height
        tabBarActiveTintColor: '#ffffff', // Color for active tab
        tabBarInactiveTintColor: '#888',  // Color for inactive tab
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, // Style for tab labels

      }}
    >
      <MyTabs.Screen
        name="Daily Task"
        component={TaskList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton iconName="list" color={color} size={size} />
          ),
          tabBarLabel: 'Daily Tasks', // Custom label for the tab
        }}
      />
      <MyTabs.Screen
        name="Favorite Task"
        component={TaskList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconButton iconName="star" color={color} size={size} />
          ),
          tabBarLabel: 'Favorites', // Custom label for the tab
        }}
      />
    </MyTabs.Navigator>

  );
}

export default DailyTaskTabs;