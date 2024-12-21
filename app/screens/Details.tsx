import { Button, Text, View } from "react-native";
import type { DetailsScreenNavigationProp } from "../navigation/RootStack";

const Details = ({ route, navigation }: DetailsScreenNavigationProp) => {
	const { id } = route.params;
	return (
		<View>
			<Text>Details {id}</Text>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
};

export default Details;
