import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class Contact extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address'
        }
    }

    clearFields=()=> this.setState({name:'', msg:'', email:''}); 

    sendMessage=()=> {
        Alert.alert(this.state.name,this.state.msg);
        this.props.navigation.goBack();
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <View style={stylesContact.container} >
                <Header navigate = {navigate} message = 'Press to Login' />
                <Text style={stylesContact.heading} >
                    Contact Us
                </Text>

                <TextInput 
                    style={stylesContact.inputs} 
                    onChangeText={(text)=> this.setState({name: text})}
                    value={this.state.name}
                />

                <TextInput 
                    style={stylesContact.multInput} 
                    onChangeText={(text)=> this.setState({msg: text})}
                    value={this.state.msg}
                    multline = {true}
                    numberOfLines = {4}
                />

                <TextInput 
                    style={stylesContact.inputs} 
                    onChangeText={(text)=> this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981' >
                    <Text style={stylesContact.buttons} >
                        Send Message
                    </Text>
                </TouchableHighlight>
                    
                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981' >
                    <Text style={stylesContact.buttons} >
                        Reset Form
                    </Text>
                </TouchableHighlight>
                    
                
            </View>
        );
    }

};

const stylesContact = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       paddingBottom: '45%'
   },
   heading: {
       fontSize:16, 
       flex: 1
   },
   inputs:{
       flex: 1,
       width: '80%',
       padding: 10
   },
   multInput:{
       flex: 2,
       width: '90%',
       paddingTop:20
   },
   buttons:{
       marginTop: 15,
       fontSize: 16
   }

});

 
