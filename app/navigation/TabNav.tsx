import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import HomeScreen from "../screens/HomeScreen";
import RootStackNavigator from "./RootStack";
type TabParamList = {
	Home: undefined;
	Feed: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNav = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={RootStackNavigator}
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={"red"} size={size} />
					),
				}}
			/>
			<Tab.Screen name="Feed" component={Feed} />
		</Tab.Navigator>
	);
};
export default TabNav;
