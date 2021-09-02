import React from 'react';
import { Text, View, FlatList, Image, TouchableHighlight } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount(){
        return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=AIzaSyBj9f5U0E-jhJ_Jxc-_q8xfQ4zTls29Q4w')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return(
            <View>
                { this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }} >
                        <FlatList 
                            data={ this.state.videoList }
                            renderItem={ ({item}) => 
                                <TubeItem 
                                navigate={navigate}
                                id={item.id.videoId}
                                title={item.snippet.title}
                                ImageSrc={item.snippet.thumbnails.high.url} />
                            } 
                        />
                    </View>
                )}

                { !this.state.listLoaded && (
                    <View style={{ paddingTop: 30 }} >
                        <Text> LOADING </Text>
                    </View>
                )}

            </View>
        );
    }

}

export class TubeItem extends React.Component {
    onPress = () => {
        this.props.navigate('VideoDetailRT', {ytubeId: this.props.id} );
        
    };

    render() {
        return(
        <TouchableWithoutFeedback onPress={this.onPress} > 
            <View style={{ paddingTop: 20, alignItem: 'center' }} >
                <Image 
                    style={{with: '100%', height: 200}}
                    source={{ uri: this.props.ImageSrc }}
                />
                <Text>
                    {this.props.title}
                </Text>
            </View>

        </TouchableWithoutFeedback>
        );
        
    }

}