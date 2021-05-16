import React from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";

export default class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    const AppNavigator = createStackNavigator

    render() {
        return(
            <View>
                <Text>This is Home Screen</Text>
                <Button
                    title={"Go to Todo List App Screen"}
                    onPress={() => this.props.navigation.navigate('todolist')}
                />
                <Button/>
            </View>
        );
    }
}
