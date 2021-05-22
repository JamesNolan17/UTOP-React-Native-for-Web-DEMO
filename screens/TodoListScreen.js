import React from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from "react-native";
import {CheckBox} from "react-native-web";
import {styles} from "../styles/basic";
import Br from "../tags";

export default class TodoListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: props.navigation.state.params.uid,
            list: [],
            input: {
                name: "",
                deadline: "",
                checked: false,
            }
        };
        //From here we know the mechanism of navigator
        console.log(props);
    }

    handleChange(name,deadline) {
        console.log(name);
        this.setState({
            input: {
                name: name!==null?name:this.state.input.name,
                deadline: deadline!==null?deadline:this.state.input.deadline,
            }
        });
        console.log(this.state);
    }

    handleSubmit() {
        if (this.state.input !== "") {
            const newList = this.state.list;
            newList.unshift(this.state.input);
            this.setState({
                list: newList,
                input: {
                    name:"",
                    deadline:"",
                    checked: false,
                }});
        }
    }

    handleClear() {
        this.setState({list: [],
            input: {
                name:"",
                deadline:"",
                checked: false,
            }})
    }

    handleCheck(index){
        const newList = this.state.list;
        newList[index].checked = !newList[index].checked;
        const checkedItemArray = newList.splice(index,1);
        newList.push(checkedItemArray[0])
        this.setState(
            {
                list: newList,
            }
        );
    }

    handleDel(index) {
        const newList = this.state.list;
        newList.splice(index,1);
        this.setState(
            {
                list: newList,
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{"Todo list with ID: " + this.state.uid}</Text>
                <Br/>
                <Text>Name: </Text>
                <TextInput style={{backgroundColor: "#dfd2fd"}} onChangeText={(text) => this.handleChange(text,null)}
                           value={this.state.input.name}/>
                <Text>Deadline: </Text>
                <TextInput style={{backgroundColor: "#dfd2fd"}} onChangeText={(text) => this.handleChange(null,text)}
                           value={this.state.input.deadline}/>
                <Br/>
                <Button title={"Submit"} onPress={() => this.handleSubmit()}/>
                <Button title={"Clear"} onPress={() => this.handleClear()}/>
                <Text>All Todos:</Text>
                {this.state.list.map((item, index) => (
                    <View key={index}>
                        <div>
                            <div style={{display: "inline-block"}}>
                                <Button title={"Del"} onPress={()=> this.handleDel(index)}/>
                            </div>
                            <div style={{display: "inline-block", textDecoration: item.checked?"line-through":"none"}}>
                                <Text>{index + "." + item.name}</Text>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <Text>{" - deadline: "+ item.deadline}</Text>
                            </div>
                            <div style={{display: "inline-block"}}>
                                <CheckBox value = {item.checked} onChange ={() =>{this.handleCheck(index)}}/>
                            </div>
                        </div>
                    </View>
                ))}
                <Button title={"Go Back"} onPress={()=>{this.props.navigation.goBack()}}/>
            </View>
        );
    }

}
