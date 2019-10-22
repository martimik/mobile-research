import React, {Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import styles from './Styles.js';
import MusicListScreen from './MusicListScreen.js';
import Player from './Player.js'


export default class Main extends React.Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('main loaded');
    
  }

  componentWillUnmount(){
  }

  render() {
    return (
      <Fragment>
        <View style={styles.header}>
          <Text style={styles.title}>Musiikkikirjasto</Text>
        </View>
        <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <MusicListScreen navigation={this.props.navigation} />
        </ScrollView>
        <View style={styles.player}>
          <Player navigation={this.props.navigation} ></Player>
        </View>
        </View>
      </Fragment>
    );
  }
}