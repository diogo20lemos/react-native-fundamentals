import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero.js';
import { Menu } from '../sections/Menu.js';


export  class Home extends React.Component{
  
    render(){

        return(
            <View style={stylesHome.container} >
                <Header navigation = {this.props.navigation} message = 'Press to Login' />
                <Hero />
                <Menu navigation={this.props.navigation} />
            </View>
        )
    }
}

const stylesHome = StyleSheet.create({
    container:{
        flex: 1,
    }
});