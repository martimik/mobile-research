import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';
import Sound from 'react-native-sound';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';


class PlayerList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { songs: [] };
    }

    addSongToQueue(song){
        this.state.songs.push(song);
    }

    render(){
        if(this.state.songs == null){
            return;
        }
        var songs = this.state.songs.map(function(song, index){
            return(       
                <TouchableHighlight onPress={_ => this.playTrack(index)} 
                underlayColor="lightgray" key={index}>
                    <PlayerListItem {...song}></PlayerListItem>
                </TouchableHighlight>                      
            )
        }.bind(this));

        return(
            <ScrollView contentContainerStyle={styles.songScrollView}>
                {songs}
            </ScrollView>
        );
    } 
}


class PlayerListItem extends React.Component {
    return(){
        return(
            <View>
                <Text>{this.props.index}</Text>
                <Text>{this.props.song.artist}</Text>
                <Text>{this.props.song.album}</Text>
                <Text>{this.props.song.title}</Text>                        
            </View>
        );
    }
}

export default class PlayerScreen extends React.Component{
    constructor(){
        super();
        this.state = {isPlaying: false, smallPlayer: true};
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
    };

    componentDidMount(){
        var newSong = this.props.navigation.getParam('song', null);
        this.setState({song: newSong});

        if(this.props.navigation['state']['routeName'] == 'Player'){
            this.setState({smallPlayer: false});
        }else{
            this.setState({smallPlayer: true});
        }        
    }   

    changePlayerSize(){   
        this.props.navigation.navigate('Player'); 
    }

    playTrack = async () => {  
        if(this.state.song == null){
            return;
        }
        this.state.isPlaying = true;

        this.track = new Sound(this.state.song['path'], '', (error) =>{
            if(error){
                console.log(error);
            }else{
                this.track.setCategory('Playback');
                this.track.play();
                this.setState({isPlaying: true});
            }
        });
    }        
    

    pause = async () => {
        if(this.track){
            this.track.pause();
        }
        this.setState({isPlaying: false});
    }

    showPlayIcon(){
        if(this.state.isPlaying){
            return(
                <Icon name="pause" size={40} onPress={_ => this.pause()} />
            );
        }else{
            return(
                <Icon name="caretright" size={40} onPress={_ => this.playTrack()} />
            );
        }   
    }

    nextTrack(){
        console.log('next track');
    }

    previousTrack(){
        console.log('previous track');
    }

    render(){
        const { navigation } = this.props;
        const song = navigation.getParam('song', null)

        return(
            <Fragment>
                <Text>Player</Text>
                <PlayerList navigation={this.props.navigation} song={song} />
                <View>
                    <Icon name="stepbackward" size={40} onPress={_ => this.previousTrack()} />
                </View>
                <View>
                    {this.showPlayIcon()}
                </View>
                <View>
                    <Icon name="stepforward" size={40} onPress={_ => this.nextTrack()} /> 
                </View>                         
            </Fragment>
        );
    }
}
