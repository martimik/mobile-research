import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons'
import styles from './Styles.js';

export default class Player extends React.Component{
    constructor(props){
        var isPlaying = false;
        var track = "";
        var trackDuration = 0;
    }
    
    // pass track name 
    playTrack() {        
        this.state.track = new Sound(track, Sound.MAIN_BUNDLE, (error) => {
            if(error){
                console.log('failed to load the sound', error);
                return;
            }

            
            if(isPlaying){
                track.stop();
            }else{
                track.play();
            }
            
        });
    }

    render(){

        return(
        <Fragment>
            <View style={styles.header}>
                <Text style={styles.title}>Player</Text>
            </View>
            <View style={styles.content}>
                <View >{this.state.track}</View>
                <View>{this.state.trackDuration}</View>
            </View>            
            <View>
                <Icon type="controller-jump-to-start" />
                {this.state.isPlaying && (
                    <Icon type="controller-play" onPress={this.playTrack()} />
                )}

                {!this.state.isPlaying && (
                    <Icon type="controller-paus" onPress={this.playTrack()} />
                )}

                <Icon type="controller-next" />
            </View>
        </Fragment> 
        );       
    }   
    
    
}
