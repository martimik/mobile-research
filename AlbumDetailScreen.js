import React, {Fragment} from 'react';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import Player from './Player.js'

import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';
import Styles from './Styles.js';

class SongList extends React.Component {
  constructor(props) {
      super(props);
      this.state = { songs: null };
  }

  componentDidMount(){
    this.getSongs();
    //alert(JSON.stringify(this.props.album));
  }
  
  componentWillUnmount(){
    state = this.state;
  }

  itemPressed = (index) => {
    this.props.navigation.navigate('Player',
    { song: this.state.songs[index], album: this.props.album, songs: this.state.songs, index: index});
  }

  getSongs(){
    RNAndroidAudioStore.getSongs({ album: this.props.album.album })
      .then(f => {
        this.setState({ songs: f });
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  render() {

    if (this.state.songs == null){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text style={Styles.text}>Loading, please wait...</Text>
        </View>
      )
    }
    var items = this.state.songs.map(function(song,index){
      return (
        <TouchableHighlight onPress={_ => this.itemPressed(index)} 
          underlayColor="lightgray" key={index}>
          <SongListItem song={song} index={index+1}/>
        </TouchableHighlight>
      )
    }.bind(this));
    return (
      <ScrollView contentContainerStyle={Styles.songScrollView}>
        {items}
      </ScrollView>
    );
  }
}

class SongListItem extends React.Component {

  msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render () {
    let duration = this.msToMinutesAndSeconds(parseInt(this.props.song.duration));
    return (
      <View style={Styles.songListItem}>
        <Text style={Styles.songListItemNumber}>{this.props.index}</Text>
        <Text style={Styles.songListItemTitle}>{this.props.song.title}</Text>
        <Text style={Styles.songListItemTime}>{duration}</Text>
      </View>
    )
  }
}

export default class AlbumDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
  };

  render() {
    const { navigation } = this.props;
    const album = navigation.getParam('album', null);

    if(album.cover != "null") {
    let imageUrl = "file://" + album.cover;
      return (
        <Fragment>
            <View style={Styles.songListHeader}>
              <Image style={Styles.songListHeaderImage} source={{uri: imageUrl}}></Image>
              <Text style={Styles.songListHeaderTitle}>{album.album}</Text>
              <Text style={Styles.songListHeaderSubTitle}>{album.author}</Text>
            </View>
          <SongList navigation={this.props.navigation} album={album}/>
          <Player navigation={this.props.navigation} ></Player>
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
            <View style={Styles.songListHeader}>
              <Image style={Styles.songListHeaderImage} source={require('./Default_Image.png')}></Image>
              <Text style={Styles.songListHeaderTitle}>{album.album}</Text>
              <Text style={Styles.songListHeaderSubTitle}>{album.author}</Text>
            </View>
          <SongList navigation={this.props.navigation} album={album}/>
          <Player navigation={this.props.navigation} ></Player>
        </Fragment>
      );
    }
  }
};