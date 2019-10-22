import React, {Fragment} from 'react';
import { View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Sound from 'react-native-sound';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

import './global.js'
import styles from './Styles.js';

export default class Player extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { song: null, album: null, title: null, index: null };
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
    };

    componentDidMount(){

        if(this.props.navigation['state']['routeName'] == 'Player'){

            global.smallPlayer = false;
            
            const album = this.props.navigation.getParam('album', null);
            const song = this.props.navigation.getParam("song", null);
            const index = this.props.navigation.getParam("index", null);
            const songs = this.props.navigation.getParam("songs", null)

            this.setState({album: album});
            this.setState({song: song});

            global.currentSong = song;
            global.currentSongIndex = index;
            this.playSong(song);
            this.createPlaylist(songs);
        }else{
            global.smallPlayer = true;
        }

        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
        this.forceUpdate();
    });
    }   

    componentWillUnmount(){
        global.smallPlayer = true;
        this.focusListener.remove();
    }

    playSong = async (song) => {
        
        if(global.playback){
            global.playback.release();
        }

        var newSound = new Sound(song.path, Sound.MAIN_BUNDLE, (error) => {
            if(error) {
                console.log('failed to load the sound', error);
                return;
            }
            
            global.playback = newSound;
            global.isPlaying = true;
            this.forceUpdate();

            newSound.play((success) => {
                if(success) {
                    this.nextTrack();
                }
                else {
                console.log('playback failed due to audio decoding errors');
              }
            })
        })
    }

    createPlaylist = async (songs) => {
        var songList = songs.map((song) => song);
        global.songList = songList;
        this.forceUpdate();
    }

    retry = async () => {  
        if(global.playback == null){
            return;
        }
        global.isPlaying = true;

        global.playback.play();

        this.forceUpdate();
    }
    

    pause = async () => {
        global.playback.pause();
       
        global.isPlaying = false;

        this.forceUpdate();
    }

    showPlayIcon(){

        if(global.isPlaying){
            return(
                <Icon name="pause" size={40} onPress={_ => this.pause()} style={styles.smallPlayerIcon}/>
            );
        }else{
            return(
                <Icon name="caretright" size={40} onPress={_ => this.retry()} style={styles.smallPlayerIcon}/>
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
        this.playSong(global.songList[global.currentSongIndex + 1]);
        global.currentSong = global.songList[global.currentSongIndex + 1];
        global.currentSongIndex += 1;
        this.setState({song: currentSong });
        console.log(currentSong);
        this.forceUpdate();
    }

    previousTrack(){
        console.log('previous track');
        this.playSong(global.songList[global.currentSongIndex - 1]);
        global.currentSong = global.songList[global.currentSongIndex - 1];
        global.currentSongIndex -= 1;
        this.setState({song: currentSong });
        console.log(currentSong);
        this.forceUpdate();
    }

    render(){
        if(global.smallPlayer == true){

            var newTitle = global.currentSong.title;
            return(
                <Fragment>
                    <View style={styles.smallPlayerView}>
                        <Text style={styles.smallPlayerText}>{newTitle}</Text>
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
