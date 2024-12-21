import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootStackNavigator from "./app/navigation/RootStack";
import TabNav from "./app/navigation/TabNav";
export default function App() {
	return (
		<NavigationContainer>
			{/* <RootStackNavigator /> */}
			<TabNav />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
