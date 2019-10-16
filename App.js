/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Separator
} from 'react-native';


const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center'
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  content: {
    flex: 3
  },
  player: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 30
  },
  menuContainer: {

  },
  contentContainer:{

  }
  
});

const App: () => React$Node = () => {
   
      return (
        <>
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
        </>
  );
};

export default App;
