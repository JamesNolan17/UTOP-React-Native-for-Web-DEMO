import React from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {styles} from "../styles/basic";
import Br from "../tags";

export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>This is Home Screen</Text>
                <Br/>
                <Button title={"Go to Todo List App Screen"} onPress={() => this.props.navigation.navigate('Todo', {uid: "55"})}/>
                <Br/>
                <Button
                    title={"Go to Tip App Screen"}
                    onPress={() => this.props.navigation.navigate('Tip')}
                />
            </View>
        );
    }

}

