import React, {Fragment} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import styles from './Styles.js';

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
            <View style={styles.menu}>
              <Button title="Soittolistat"></Button>
              <Button title="Artistit"></Button>
              <Button title="Kaikki"></Button> 
            </View>
            <View style={styles.content}>
              <Text>Placeholder for content</Text>
            </View>
            <View style={styles.player}>
              <Text>Placeholder for player</Text>
            </View>
          </Fragment>
        );
      }
}