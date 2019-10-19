import React, {Fragment} from 'react';
import styles from './Styles.js';
import MusicFiles, { RNAndroidAudioStore } from "react-native-get-music-files";

import {
  PermissionsAndroid,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button
} from 'react-native';

class MusicList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { albums: null };
  }

  requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        ],
        {
          title: "Permission",
          message: "Storage access is requiered",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        alert("You can use the package");
      } else {
        this.requestPermission();
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount() {

    this.requestPermission();
    this.getMusic();

  }

  itemPressed = (index) => {
      this.props.navigation.navigate('AlbumDetailScreen',
      {album: this.state.albums[index]});
  }

  async getMusic(){

    this.getAll = () => {
      RNAndroidAudioStore.getAll({
        blured: false, // works only when 'cover' is set to true
        artist: true,
        duration: true, //default : true
        cover: false, //default : true,
        genre: true,
        title: true,
        cover: true,
        minimumSongDuration: 10000, // get songs bigger than 10000 miliseconds duration,
        batchNumber : 1,
        delay: 1000
      }).then(tracks => {
        this.setState({ albums: tracks})
      })
        .catch(er => alert(JSON.stringify(error)));
    };
    
    this.getAlbums = (artist='') => {
      RNAndroidAudioStore.getAlbums({ artist : artist })
        .then(f => {
          this.setState({ albums: f });
        })
        .catch(er => alert(JSON.stringify(error)));
    };
  }

  render() {
  
    if (this.state.albums == null){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text style={styles.text}>Loading, please wait...</Text>
          <Button onPress = {() =>{
        this.getMusic();
      }} title="Test me"/>
        </View>
      )
    }
    var items = this.state.albums.map(function(album,index){
      return (
        <TouchableHighlight onPress={_ => this.itemPressed(index)} 
          underlayColor="lightgray" key={index}>
          <MusicListItem album={album}/>
        </TouchableHighlight>
      )
    }.bind(this));
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        {items}
      </ScrollView>
    );
  }
}

// remove comments after getMusic is implemented
class MusicListItem extends React.Component {
  render() {
    // let imageUrl = this.props.album.Images[0];
    return (
      <View style={styles.albumListItem}>
        <Image source={{uri: imageurl}} style={styles.albumListImage}></Image>
        <Text style={styles.albumListTitle}>album name</Text>
        <Text style={styles.albumListSubTitle}>band name</Text>
      </View>
    )
  }
}

export default class MusicListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
  };

  render() {
    return (
      <Fragment>
        <MusicList navigation={this.props.navigation}/>
      </Fragment>
    );
  }
};