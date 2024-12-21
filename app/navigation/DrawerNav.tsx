import {
	type DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
	createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Feed from "../screens/Feed";
import HomeScreen from "../screens/HomeScreen";

type DrawerParamList = {
	Home: undefined;
	Feed: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNav = () => {
	const navigation = useNavigation();

	const customDrawerContent = (props: DrawerContentComponentProps) => {
		return (
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
				<DrawerItem label="Go to Feed" onPress={() => navigation.goBack()} />
			</DrawerContentScrollView>
		);
	};
	return (
		<Drawer.Navigator drawerContent={customDrawerContent}>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Feed" component={Feed} />
		</Drawer.Navigator>
	);
};

export default DrawerNav;
