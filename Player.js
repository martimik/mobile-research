import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons'
import styles from './Styles.js';

export default class Player extends React.Component{

    constructor(props){
        super(props)
        //var isPlaying = false;
        //var track = "";
        //var trackDuration = 0;
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

    render(){
        return(
        <Fragment>
            <View style={styles.header}>
                <Text>Player</Text>
            </View>


        </Fragment> 
        );       
    }   
    
    
}
