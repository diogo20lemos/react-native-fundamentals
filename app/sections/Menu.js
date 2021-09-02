import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

export class Menu extends React.Component{

    onPress = ()=> {
        Alert.alert('You tapped the button!');
    }

    render(){
        return(
            <View style={stylesMenu.container} >
                <View style={stylesMenu.buttonRow} >
                    <TouchableOpacity style={stylesMenu.buttonStyles} onPress={()=>this.props.navigation.navigate('VideoRT')} >
                        <Text style={stylesMenu.buttonText} > LESSONS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.buttonStyles} onPress={this.props.navigation.navigate('RegisterRT')}  >
                        <Text style={stylesMenu.buttonText} > REGISTER </Text>
                    </TouchableOpacity>
                </View>

                <View style={stylesMenu.buttonRow} >
                    <TouchableOpacity style={stylesMenu.buttonStyles} onPress={() => this.props.navigation.navigate('BlogRT')}  >
                        <Text style={stylesMenu.buttonText} > BLOG </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.buttonStyles}  onPress={() => this.props.navigation.navigate('ContactRT')} >
                        <Text style={stylesMenu.buttonText} > CONTACT </Text>
                    </TouchableOpacity>
                </View>

                <View style={stylesMenu.buttonRow} >
                    <TouchableOpacity style={stylesMenu.buttonStyles} onPress={() => this.props.navigation.navigate('QuizRT')}  >
                        <Text style={stylesMenu.buttonText} > QUIZ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesMenu.buttonStyles} onPress={() => this.props.navigation.navigate('AboutRT')}  >
                        <Text style={stylesMenu.buttonText} > ABOUT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const stylesMenu = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 18
    }
});