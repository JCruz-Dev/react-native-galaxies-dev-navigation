import { useLayoutEffect } from "react";
import { Button, Text, View } from "react-native";
import type { RootStackNavigationProp } from "../navigation/RootStack";
const HomeScreen = ({
	navigation,
}: {
	navigation: RootStackNavigationProp;
}) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => <Button title="Go to Feed" />,
			headerStyle: {
				backgroundColor: "#1a1a1a",
			},
			headerTintColor: "white",
		});
	}, [navigation]);
	return (
		<View>
			<Text>Homex</Text>
			<Button title="Go to Feed" onPress={() => navigation.navigate("Feed")} />
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Details", { id: "1" })}
			/>
			<Button
				title="Go to Drawer"
				onPress={() => navigation.navigate("Drawer")}
			/>
			<Button
				title="Go to Modal"
				onPress={() => navigation.navigate("Modal")}
			/>
		</View>
	);
};

export default HomeScreen;
