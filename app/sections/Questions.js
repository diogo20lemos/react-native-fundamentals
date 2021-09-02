import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            correct: false
        }
    }

    chooseAnswer=(ans)=>{
        let worth = 25;
        if (ans === this.props.correctAnswer) {
            this.setState({
                selected: true,
                correct: true
            });
            this.props.scoreUpdate(0);
        }
        else {
            this.setState({
                selected: true
            });
            this.props.scoreUpdate(worth);
        }
    }

    render() {
        return (
            <View style={stylesQuestions.container}>
                { !this.state.selected && (
                    <View style={stylesQuestions.container} >
                        <Text style={stylesQuestions.questionsText} >{this.props.question}</Text>
                        
                        <TouchableHighlight underlayColor='#d3d3d3' onPress={()=> this.chooseAnswer('answer1')} >
                            <Text style={stylesQuestions.answerText} >{this.props.answer1}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={()=> this.chooseAnswer('answer2')} >
                            <Text style={stylesQuestions.answerText} >{this.props.answer2}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={()=> this.chooseAnswer('answer3')} >
                            <Text style={stylesQuestions.answerText} >{this.props.answer3}</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor='#d3d3d3' onPress={()=> this.chooseAnswer('answer4')} >
                            <Text style={stylesQuestions.answerText} >{this.props.answer4}</Text>
                        </TouchableHighlight>

                    </View>
                )}
                { this.state.selected && this.state.correct && (
                    <View style={stylesQuestions.correctContainer}>
                        <Text style={stylesQuestions.questionText}>{this.props.question}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer1}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer2}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer3}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer4}</Text>
                        <Text style={stylesQuestions.answerText}>CORRECT</Text>
                    </View>
                )}
                { this.state.selected && !this.state.correct && (
                    <View style={stylesQuestions.wrongContainer}>
                        <Text style={stylesQuestions.questionText}>{this.props.question}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer1}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer2}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer3}</Text>
                        <Text style={stylesQuestions.answerText}>{this.props.answer4}</Text>
                        <Text style={stylesQuestions.answerText}>INCORRECT</Text>
                    </View>
                )}
            </View>
        )
    }

}

const stylesQuestions = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    correctContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#008000'
    },
    wrongContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#ff0000'
    },
    questionText: {
        flex: 2,
        padding: 15,
        fontSize: 20
    },
    answerText: {
        flex: 2,
        padding: 15,
        fontSize: 20,
        textAlign: 'center'
    },
})