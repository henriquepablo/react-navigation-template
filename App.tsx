import { NavigationContainer } from "@react-navigation/native";
import Stack from "./src/router/Stack";

function App(): React.JSX.Element {
	return (
		<NavigationContainer>
			<Stack />
		</NavigationContainer>
	);
}

export default App;