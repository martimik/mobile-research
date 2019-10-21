import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';
import Sound from 'react-native-sound';


export default class Player extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { smallPlayer: true, song: null, album: null }
        
        global.isPlaying = false;
        
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

    componentWillUnmount(){
        this.setState({smallPlayer: true});
        this.setState({isPlaying: true});
    }

    changePlayerSize(){   
        this.props.navigation.navigate('Player'); 
    }

    playTrack = () => {  
        if(global.isPlaying){
            global.isPlaying = false;
            this.showPlayIcon();
            this.track.pause();
        }else{
            global.isPlaying = true;
            this.showPlayIcon();
            
            this.track = new Sound(this.state.song, '', (error) =>{
                if(error){
                    console.log(error);
                }else{
                    this.track.play();
                }
            });
        }        
    }

    pause = () => {
        this.track.pause();
        global.isPlaying = false;
    }

    showPlayIcon(){
        if(global.isPlaying){
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

        if(this.state.smallPlayer == true){    
            return(
                <Fragment>
                    <View style={styles.header}>
                        <Text onPress={_ => this.changePlayerSize()}>{this.state.song}</Text>
                        {this.showPlayIcon()}
                    </View>        
                </Fragment> 
                );    
        }else{
            return(
                <Fragment>
                    <View>
                        <Text>Player</Text>
                        <Text>{this.state.song.split("/").pop()}</Text>
                        <Icon name="stepbackward" size={40} onPress={_ => this.previousTrack()} />
                        {this.showPlayIcon()}
                        <Icon name="stepforward" size={40} onPress={_ => this.nextTrack()} /> 
                    </View>
                </Fragment>
            );
        } 
    }
}
