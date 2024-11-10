import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondPage from "../Pages/SecondPage";
import FirstPage from "../Pages/FirstPage";

const stack = createNativeStackNavigator();

function Stack(): React.JSX.Element {
    return(
        <stack.Navigator>
            <stack.Screen name="First Page" component={FirstPage} />
            <stack.Screen name="Second Page" component={SecondPage}/>
        </stack.Navigator>        
    );
}

export default Stack;