import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons'

export default class Player extends React.Component{
    constructor(props){
        var isPlaying = false;

    }
    
    // pass track name 
    playTrack(track) {        
        var track = new Sound(track, Sound.MAIN_BUNDLE, (error) => {
            if(error){
                console.log('failed to load the sound', error);
                return;
            }

            console.log('Duration ' + track.getDuration())
            if(isPlaying){
                track.stop();
            }else{
                track.play();
            }
            
        });
    }

    render(){
        return(<Fragment>
            <View>
                <Text>Player</Text>
            </View>
            <View>CD info/png</View>
            <View>timeline</View>
            <View>
                <Icon type="controller-jump-to-start" />
                {this.state.isPlaying && (
                    <Icon type="controller-play" onPress={this.playTrack('test.mp3')} />
                )}

                {!this.state.isPlaying && (
                    <Icon type="controller-paus" />
                )}

                <Icon type="controller-next" />
            </View>
        </Fragment> 
        );       
    }   
    
    
}
