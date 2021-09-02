import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattins iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattins iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

export class About extends React.Component {

    render() {
        return(
            <ScrollView style={stylesAbout.container} >
                <Image style={stylesAbout.pics} source={require('../sections/img/about.png')} />

                <Text style={stylesAbout.aboutTitle} >Who we Are</Text>
                <Text style={stylesAbout.aboutText} >{aboutGlobo}</Text>

                <Image style={stylesAbout.pics} source={require('../sections/img/not.png')} />
                <Text style={stylesAbout.aboutTitle} >What we Do</Text>
                <Text style={stylesAbout.aboutText} >{whatGlobo}</Text>
                <Text onPress={()=> this.props.navigation.goBack()} style={stylesAbout.backButton} >GO BACK</Text>

            </ScrollView>
        );
    }

}

const stylesAbout = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300,
        marginLeft: 20
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
        
    },
    aboutText: {
        paddingBottom: 20,
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});