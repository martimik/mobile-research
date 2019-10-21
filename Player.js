import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';

export default class Player extends React.Component{

    constructor(props){
        super(props);
        
        this.state = { smallPlayer: true, song: null, album: null, isPlaying: true }
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
    }

    changePlayerSize(){   
        this.props.navigation.navigate('Player'); 
    }

    playTrack() { 
        if(this.state.isPlaying){
            this.setState({isPlaying: false});
            this.showPlayIcon();
        }else{
            this.setState({isPlaying: true});
            this.showPlayIcon();
        }        
    }

    showPlayIcon(){
        if(this.state.isPlaying){
            console.log('play');
            return(
                <Icon name="pause" size={40} onPress={_ => this.playTrack()} />
            );
        }else{
            console.log('pause');
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
                        <Text onPress={_ => this.changePlayerSize()} >Player</Text>
                        {this.showPlayIcon()}
                    </View>        
                </Fragment> 
                );    
        }else{
            return(
                <Fragment>
                    <View>
                        <Text>Player</Text>
                        <Text>Playercomponent</Text>
                        <Icon name="stepbackward" size={40} onPress={_ => this.previousTrack()} />
                        {this.showPlayIcon()}
                        <Icon name="stepforward" size={40} onPress={_ => this.nextTrack()} /> 
                    </View>
                </Fragment>
            );
        } 
    }
}
