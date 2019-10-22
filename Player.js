import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';
import Sound from 'react-native-sound';



export default class Player extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { smallPlayer: true, song: null, album: null, isPlaying: false };
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
    };

    componentDidMount(){
        if(this.props.navigation['state']['routeName'] == 'Player'){
            this.setState({smallPlayer: false});
        }else{
            this.setState({smallPlayer: true});
        }    
        var newSong = this.props.navigation.getParam('song', null);
        var playerState = this.props.navigation.getParam('isPlaying', null);
        
        this.setState({song: newSong, isPlaying: playerState});           
        console.log("player loaded isPlaying =" + this.state.isPlaying);      
    }   

    componentWillUnmount(){
        console.log("player quit isPlaying =" + this.state.isPlaying);
        state = this.state;
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
      
        this.track.pause();
       
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
        /*if(this.props.navigation.getParam('isPlaying', null) == null){
            return(
                <View></View>
            );
        }*/
        if(this.state.smallPlayer == true){    
            return(
                <Fragment>
                    <View style={styles.header}>
                        <Text>Player</Text>
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
                        <Text>{this.state.song.artist}</Text>
                        <Text>{this.state.song.album}</Text>
                        <Text>{this.state.song.title}</Text>
                        <Icon name="stepbackward" size={40} onPress={_ => this.previousTrack()} />
                        {this.showPlayIcon()}
                        <Icon name="stepforward" size={40} onPress={_ => this.nextTrack()} /> 
                    </View>
                </Fragment>
            );
        } 
    }
}
