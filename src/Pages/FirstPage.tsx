import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function FirstPage(): JSX.Element {

    const navigation = useNavigation();

    return(
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Second Page' as never)}>
                <Text style={{color: '#000', fontSize: 20}}>
                    Navigate to Second Page
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default FirstPage;