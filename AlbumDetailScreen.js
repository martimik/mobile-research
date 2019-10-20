import React, {Fragment} from 'react';
import styles from './Styles.js';

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
    alert(JSON.stringify(this.props.album));
  }

  itemPressed = (index) => {
    this.props.navigation.navigate('PlayerScreen',
    {song: this.state.album.song[index]});
  }

  getSongs(){

  }

  render() {

    if (this.state.songs == null){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text style={styles.text}>Loading, please wait...</Text>
        </View>
      )
    }
    var items = this.state.songs.map(function(song,index){
      return (
        <TouchableHighlight onPress={_ => this.itemPressed(index)} 
          underlayColor="lightgray" key={index}>
          <SongListItem song={song}/>
        </TouchableHighlight>
      )
    }.bind(this));
    return (
      <ScrollView contentContainerStyle={styles.songScrollView}>
        {items}
      </ScrollView>
    );
  }
}

class SongListItem extends React.Component {
    render () {
        return (
            <View style={Styles.songListItem}>
                <Text style={Styles.songListItemNumber}>X</Text>
                <Text style={Styles.songListItemTitle}>Song Name</Text>
                <Text style={Styles.songListItemTime}>x:xx</Text>
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
    let imageUrl = "file://" + album.cover;
      return (
      <Fragment>
          <View style={Styles.songListHeader}>
              <Image style={Styles.songListHeaderImage} source={{uri: imageUrl}}></Image>
              <Text style={Styles.songListHeaderTitle}>{album.album}</Text>
              <Text style={Styles.songListHeaderSubTitle}>{album.author}</Text>
          </View>
          <SongList navigation={this.props.navigation} album={album}/>
      </Fragment>
      );
  }
};