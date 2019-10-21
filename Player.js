import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';

export default class Player extends React.Component{

    constructor(props){
        super(props);
        var isPlaying = false;
        var track = "";
        var trackDuration = 0;
        this.state = { smallPlayer: false, song: null, album: null }
    }

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
    };

    componentDidMount(){
        // this.setState({smallPlayer: navigation.getParam('smallPlayer', null)});
        // this.setState({song: navigation.getParam('song', null)});
        // this.setState({album: navigation.getParam('album', null)});
    }
    
    // pass track name 
    playTrack() { /*
        var track = new Sound("biisi.mp3", Sound.MAIN_BUNDLE, (error) => {
            if(error){
                console.log('failed to load the sound', error);
                return;
            }

            this.state.trackDuration = track.getDuration();
            
            if(isPlaying){
                track.pause();
                isPlaying = false;
            }else{
                track.play();
                isPlaying = true;
            }

        });*/
    }

    changePlayerSize(){

    }

    nextTrack(){
        alert('next track');
    }

    previousTrack(){
        alert('previoustrack');
    }

    render(){
            
            return(
                <Fragment>
                    <View style={styles.header}>
                        <Text onPress={this.changePlayerSize()} >Player</Text>
                        
                    </View>        
                </Fragment> 
                );    
        // if(this.state.smallPlayer == true){
        //     // return player component
        //     // return(
        //     //     <Fragment>
        //     //         <View style={styles.header}>
        //     //             <Text>Player</Text>
        //     //         </View>        
        //     //     </Fragment> 
        //     //     );       
            
        // }
        // else {
        //     // return player screen
        //     // return(
        //     //     <Fragment>
        //     //         <View>
        //     //             <Text>Playercomponent</Text> 
        //     //         </View>
        //     //     </Fragment>
        //     // );
        // }   
    }
}
