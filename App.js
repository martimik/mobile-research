import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main.js'
import AlbumDetailScreen from './AlbumDetailScreen.js'
import Player from './Player.js'

const MainNavigator = createStackNavigator({
  Main: {
    screen: Main
  },
  AlbumDetail: {
    screen: AlbumDetailScreen
  },
  Player: {
    screen: Player
  }
}, {headerMode: 'none'});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}