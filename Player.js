import React, {Fragment} from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons'

export default class Player extends React.Component{
    render(){
        return(<Fragment>
            <View>
                <Text>Player</Text>
            </View>
            <View>CD info/png</View>
            <View>
                <Icon type="stepbackward" />
                <Icon type="play" />
                <Icon type="stepforward" />
            </View>
        </Fragment> 
        );       
    }    
}
