import React, {Fragment} from 'react';
import { View, Image, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';
import Sound from 'react-native-sound';
import { TouchableHighlight, ScrollView } from 'react-native-gesture-handler';

export default class Player extends React.Component{
    
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
        if(this.props.navigation['state']['routeName'] == 'Player'){
            this.setState({smallPlayer: false});
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
        if(this.state.smallPlayer == true){    
            return(
                <Fragment>
                    <View style={styles.smallPlayerView}>
                        <Text style={styles.smallPlayerText}>Current Song</Text>
                        <Text onPress={_ => this.changePlayerSize()}>{this.state.song}</Text>
                        {this.showPlayIcon()}
                    </View>        
                </Fragment> 
                );    
        }else{
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
