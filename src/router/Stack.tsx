import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondPage from "../Pages/SecondPage";
import FirstPage from "../Pages/FirstPage";
import React from "react";

const stack = createNativeStackNavigator();

function Stack(): React.JSX.Element {
    return(
        <stack.Navigator>
            <stack.Screen name="FirstPage" component={FirstPage} />
            <stack.Screen name="SecondPage" component={SecondPage}/>
        </stack.Navigator>        
    );
}

export default Stack;