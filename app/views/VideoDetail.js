import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from 'react-native';

export class VideoDetail extends React.Component {
    render() {
        let tubeId = this.props.route.params.ytubeId
        let tubeUrl = 'https://www.youtube.com/embed/'+tubeId;
        console.log(tubeUrl);
        
        return (
            <WebView 
                style={{marginTop: 20}}
                javaScriptEnabled={true}
                source={{uri: tubeUrl}}
            />
        )
    }
}