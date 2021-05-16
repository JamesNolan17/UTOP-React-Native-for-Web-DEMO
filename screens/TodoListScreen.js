import React from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from "react-native";
import {CheckBox} from "react-native-web";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: props.uid,
            list: [],
            input: ""
        };
    }

    handleChange(text) {
        console.log(text);
        this.setState({
            input: text
        });
        console.log(this.state);
    }

    handleSubmit() {
        if (this.state.input !== "") {
            const newList = this.state.list;
            newList.push(this.state.input);
            this.setState({list: newList, input: ""});
        }
    }

    handleClear() {
        this.setState({list: [], input: ""})
    }

    render() {
        return (
            <View style={{backgroundColor: "#155f92"}}>
                <Text>{"Todo list with ID: " + this.state.uid}</Text>
                <TextInput style={{backgroundColor: "#0FFFFF"}} onChangeText={(text) => this.handleChange(text)}
                           value={this.state.input}/>
                <Button title={"Submit"} onPress={() => this.handleSubmit()}/>
                <Text>All Todos:</Text>
                {this.state.list.map((item, index) => (
                    <View key={index}>
                        <div>
                            <div style={{display: "inline-block"}}>
                                <Text>{index + "." + item}</Text>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <CheckBox/>
                            </div>
                        </div>
                    </View>
                ))}
                <Button title={"Clear"} onPress={() => this.handleClear()}/>
            </View>
        );
    }

}
