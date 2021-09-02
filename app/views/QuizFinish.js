import React from 'react';
import { StyleSheet, Text, View, TouchableHighLight } from 'react-native';

export class Finish extends React.Component {

    exitQuiz=()=>{
        this.props.navigation.navigate('HomeRT');
    }

    render(){
        let userScore = this.props.navigation.getParam('score', 'Error - No score returned');       
        let questionsMissed = this.props.navigation.getParam('missed', 'Error - No missed questions');       
        let totalQuestions = this.props.navigation.getParam('questions', 'Error - No questions returned'); 
        
        return (
            <View style={stylesFinish.container} >
                <Text>You quiz score was {userScore} </Text>
                <Text> You missed on {questionsMissed} out of {totalQuestions} questions </Text>
                
                <TouchableHighLight onPress={this.exitQuiz} style={stylesFinish.button} >
                    <Text>Finish Quiz</Text>
                </TouchableHighLight>
            </View>
        );

    }

}

const stylesFinish = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%'
    }
});