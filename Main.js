import React, {Fragment} from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './Styles.js';
import MusicListScreen from './MusicListScreen.js';

export default class Main extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const {state} = navigation;
        return {
          title: `Main`,
        };
    };

    render() {
        return (
          <Fragment>
            <View style={styles.header}>
              <Text style={styles.title}>Musiikkikirjasto</Text>
            </View>
            <View style={styles.content}>
              <MusicListScreen />
            </View>
            <View style={styles.player}>
              <Text style={styles.text}>Placeholder for player</Text>
            </View>
          </Fragment>
        );
    }
}