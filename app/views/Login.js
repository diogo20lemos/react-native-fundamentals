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

export class Login extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             username: '',
             password: ''
         };
     };

     cancelLogin = ()=>{
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT');
     }

     loginUser = ()=>{

        if ( !this.state.username ){
            Alert.alert('Please enter a username')
        }
        else if ( !this.state.password){
            Alert.alert('Please enter a password')
        }
        else {
            AsyncStorage.getItem('userLoggedIn', (err, result) => {
                if (result!=='none'){
                    Alert.alert('Someone already logged on');
                    this.props.navigation.navigate('HomeRT');
                }
                else {
                    AsyncStorage.getItem(this.state.username, (err, result) => {
                        if (result!==null){

                            if (result!==this.state.password){
                                Alert.alert('Password incorrect')
                            }
                            else {
                                AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                                    Alert.alert(this.state.username+' Logged in');
                                    this.props.navigation.navigate('HomeRT');
                                })
                            }
                        }
                        else {
                            Alert.alert('No account for '+this.state.username);
                        }
                    })
                }
            })
        }

     }

     render(){
         return(
            <View style={stylesLogin.container} >
                <Text style={stylesLogin.heading} > Login </Text>
                
                <TextInput  
                    style={stylesLogin.inputs}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />
                <Text style={stylesLogin.label} >Enter Username</Text>

                <TextInput  
                    style={stylesLogin.inputs}
                    onChangeText={(text) => this.setState({password:text})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                <Text style={stylesLogin.label} >Enter Password</Text>

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981' >
                    <Text style = {stylesLogin.buttons} >
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981' >
                    <Text style = {stylesLogin.buttons} >
                        Cancel
                    </Text>
                </TouchableHighlight>




            </View>
         );
     }

}


const stylesLogin = StyleSheet.create({
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