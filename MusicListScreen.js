import React, {Fragment} from 'react';
import styles from './Styles.js';
import { RNAndroidAudioStore } from "react-native-get-music-files";

import {
  PermissionsAndroid,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
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
    this.getAlbums();
    console.log('musiclist loaded');
  }

  componentWillUnmount(){
    console.log('musiclist quit');
  }

  itemPressed = (index) => {
      
      this.props.navigation.navigate('AlbumDetail',
      {album: this.state.albums[index]});
      // alert(JSON.stringify(this.state.albums[index].cover));
  }

  getAlbums () {
    RNAndroidAudioStore.getAlbums({ artist : '' })
    .then(f => {
      this.setState({ albums: f });
      
    })
    .catch(error => alert(JSON.stringify(error)));
  }

  render() {
  
    if (this.state.albums == null){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text style={styles.text}>Loading, please wait...</Text>
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

class MusicListItem extends React.Component {
  render() {

    if(this.props.album.cover != 'null'){
      let imageUrl = "file://" + this.props.album.cover;

      return (
        <View style={styles.albumListItem}>
          <Image source={{isStatic:true, uri: imageUrl}} style={styles.albumListImage}></Image>
          <Text style={styles.albumListTitle}>{ this.props.album.album}</Text>
          <Text style={styles.albumListSubTitle}>{this.props.album.author}</Text>
        </View>
      )
    }
    else {
      return (
        <View style={styles.albumListItem}>
          <Image source={require('./Default_Image.png')} style={styles.albumListImage}></Image>
          <Text style={styles.albumListTitle}>{ this.props.album.album}</Text>
          <Text style={styles.albumListSubTitle}>{this.props.album.author}</Text>
        </View>
      )
    }
  }
}

export default class MusicListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
  };

  render() {
    return (
      <Fragment>
        <MusicList navigation={this.props.navigation} />
      </Fragment>
    );
  }
};