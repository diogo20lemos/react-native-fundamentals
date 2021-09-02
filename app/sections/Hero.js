import { styles } from 'ansi-colors';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

export class Hero extends React.Component{
    render(){
        return(
            <Image 
                style={stylesHero.heroImage}
                source={ require('./img/mesa.jpg') }
            />
        );
    }
}

const stylesHero = StyleSheet.create({
    heroImage:{
        width: undefined,
        height: undefined,
        flex: 8,
    }
});