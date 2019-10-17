import React, {Fragment} from 'react';
import styles from './Styles.js';

import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class MusicList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { music: null };
  }

  componentDidMount() {

    this.getMusic();

  }

  itemPressed = (index) => {
      this.props.navigation.navigate('AlbumDetailScreen',
      {music: this.state.music.album[index]});
  }

  async getMusic(){
      // Implement music search here
  }

  render() {
  
    if (this.state.music == null){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text style={styles.text}>Loading, please wait...</Text>
        </View>
      )
    }
    var items = this.state.music.album.map(function(album,index){
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
      <View style={styles.musicListItem}>
        <Image source={{uri: imageurl}} style={styles.musicListImage}></Image>
        <Text style={styles.musicListTitle}>album name</Text>
        <Text style={styles.musicListSubTitle}>band name</Text>
      </View>
    )
  }
}

export default class MusicListScreen extends React.Component {
  render() {
    return (
      <Fragment>
        <MusicList navigation={this.props.navigation}/>
      </Fragment>
    );
  }
};