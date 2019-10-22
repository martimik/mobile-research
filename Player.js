import React, {Fragment} from 'react';
import { View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Sound from 'react-native-sound';

import './global.js'
import styles from './Styles.js';

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
            global.smallPlayer = false;
            this.setState({album: this.props.navigation.getParam('album', null)})
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

    playTrack = async () => {  
        if(global.currentSong == null){
            return;
        }
        global.isPlaying = true;

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
      
        global.playback.pause();
       
        global.isPlaying = false;
    }

    showPlayIcon(){
        if(global.isPlaying){
            return(
                <Icon name="pause" size={40} onPress={_ => this.pause()} style={styles.smallPlayerIcon}/>
            );
        }else{
            return(
                <Icon name="caretright" size={40} onPress={_ => this.playTrack()} style={styles.smallPlayerIcon}/>
            );
        }   
    }

    ShowAlbumCover(){
    
        if(this.state.album.cover != 'null'){
            let imageUrl = "file://" + this.state.album.cover;
            return(
                <Image style={styles.playerImage} source={{uri: imageUrl}}></Image>
            );
        }
        else{
            return(
                <Image style={styles.playerImage} source={require('./Default_Image.png')}></Image>
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
        if(global.smallPlayer == true){    
            return(
                <Fragment>
                    <View style={styles.smallPlayerView}>
                        <Text style={styles.smallPlayerText}>{global.currentSong}</Text>
                        {this.showPlayIcon()}
                    </View>        
                </Fragment> 
                );    
        }
        else {
            return(
                <Fragment>
                    <View style={styles.playerView}>
                        {this.ShowAlbumCover()}
                        <Text style={styles.playerTitle}>{this.state.song.title}</Text>
                        <Text style={styles.playerSubTitle}>{this.state.song.artist}</Text>
                        <View style={styles.playerActionbar}>
                            <Icon name="stepbackward" size={40} onPress={_ => this.previousTrack()} style={styles.smallPlayerIcon}/>
                            {this.showPlayIcon()}
                            <Icon name="stepforward" size={40} onPress={_ => this.nextTrack()} style={styles.smallPlayerIcon}/>
                        </View>
                    </View>
                </Fragment>
            );
        } 
    }
}
