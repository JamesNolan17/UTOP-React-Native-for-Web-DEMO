import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoListScreen from "./screens/TodoListScreen";
import HomeScreen from "./screens/HomeScreen";
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import TipScreen from "./screens/TipScreen";


const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Todo: TodoListScreen,
        Tip: TipScreen,
    },
    {
        initialRouteName: "Home",
        headerMode: "screen"
    }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
    return <AppContainer />;
}
