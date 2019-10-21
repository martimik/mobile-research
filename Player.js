import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles.js';

export default class Player extends React.Component{

    constructor(props){
        super(props);
        
        this.state = { smallPlayer: true, song: null, album: null }
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
        console.log(this.state.smallPlayer);
        console.log(this.props.navigation['state']['routeName']);
    }

    changePlayerSize(){   
        this.props.navigation.navigate('Player'); 
    }

    playTrack() { 
        console.log('play track');
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
                    </View>        
                </Fragment> 
                );    
        }else{
            return(
                <Fragment>
                    <View>
                        <Text>Player</Text>
                        <Text>Playercomponent</Text>
                        <Icon name="stepbackward" onPress={_ => this.previousTrack()} />
                        <Icon name="caretright" onPress={_ => this.playTrack()} />
                        <Icon name="stepforward" onPress={_ => this.nextTrack()} /> 
                    </View>
                </Fragment>
            );
        } 
    }
}
