import {
	type NativeStackNavigationProp,
	createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Details from "../screens/Details";
import Feed from "../screens/Feed";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import DrawerNav from "./DrawerNav";

type RootStackParamList = {
	Home: undefined;
	Feed: undefined;
	Details: {
		id: string;
	};
	Drawer: undefined;
	Modal: undefined;
};
export type RootStackNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Home"
>;
export type DetailsScreenNavigationProp = {
	route: {
		params: {
			id: string;
		};
	};
	navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
};
export type FeedScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Feed"
>;
const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
	return (
		<RootStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "red",
				},
				headerTintColor: "blue",
			}}
		>
			<RootStack.Group>
				<RootStack.Screen name="Home" component={HomeScreen} />
				<RootStack.Screen name="Feed" component={Feed} />
				<RootStack.Screen
					name="Details"
					options={{ headerShown: false }}
					component={Details}
				/>
				<RootStack.Screen
					name="Drawer"
					component={DrawerNav}
					options={{ headerShown: false }}
				/>
			</RootStack.Group>
			<RootStack.Group screenOptions={{ presentation: "modal" }}>
				<RootStack.Screen name="Modal" component={ModalScreen} />
			</RootStack.Group>
		</RootStack.Navigator>
	);
}
