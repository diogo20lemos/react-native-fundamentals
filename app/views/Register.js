import { styles } from 'ansi-colors';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    AsyncStorage
} from 'react-native';

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: ''
        };
    };

    cancelRegister = ()=>{
        Alert.alert('Registration cancelled');
        this.props.navigation.navigate('HomeRT');
    }

    registerAccount = ()=>{
        if ( !this.state.username){
            Alert.alert('Please enter a username')
        }
        else if ( this.state.password !== this.state.passwordConfirm ){
            Alert.alert('Password do not match')
        }else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result!==null){
                    Alert.alert(this.state.username+' already exists');
                }else {
                    AsyncStorage.setItem(this.state.username, this.state.password, (err, result) => {
                        Alert.alert(this.state.username+' accont created');
                        this.props.navigation.navigate('HomeRT');
                    })
                }
            });
        }
    }

    render(){
        return(
            <View style={stylesRegister.container}>
                <Text style={stylesRegister.heading} >Register Account</Text>

                <TextInput 
                    style={stylesRegister.inputs}
                    onChangeText={(text) => this.setState({username: text}) }
                    value={this.state.username}
                />
                <Text style={stylesRegister.label} > Enter username </Text>

                <TextInput 
                    style={stylesRegister.inputs}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Text style={stylesRegister.label}>Enter Password</Text>

                <TextInput 
                    style={stylesRegister.inputs}
                    onChangeText={(text) => this.setState({passwordConfirm: text})}
                    value={this.state.passwordConfirm}
                    secureTextEntry={true}
                />
                <Text style={stylesRegister.label}>Confirm Password</Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981' >
                    <Text style={stylesRegister.buttons} >
                        Register
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981' >
                    <Text style={stylesRegister.buttons} >
                        Cancel
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }

}

const stylesRegister = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    },
    label:{
        paddingBottom: 10
    }
});