import React from "react";
import { Text, View } from "react-native";

function SecondPage(): JSX.Element {
    return(
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 20}}>
                Second Page
            </Text>
        </View>
    );
}

export default SecondPage;