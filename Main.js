import React, {Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import styles from './Styles.js';
import MusicListScreen from './MusicListScreen.js';
import Player from './Player'

export default class Main extends React.Component {

  render() {
    return (
      <Fragment>
        <View style={styles.header}>
          <Text style={styles.title}>Musiikkikirjasto</Text>
        </View>
        <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <MusicListScreen navigation={this.props.navigation}/>
        </ScrollView>
        </View>
        <View style={styles.player}>
          <Player smallPlayer={true} navigation={this.props.navigation}></Player>
        </View>
      </Fragment>
    );
  }
}