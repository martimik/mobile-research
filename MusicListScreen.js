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
  
    componentDidMount(){
        this.getMusic();
    }

    itemPressed = (index) => {
        this.props.navigation.navigate('bandDetail',
        {show: this.state.music.album[index]});
    }

    async getMusic(){
        // Implement music search here
    }

    render() {
    
        if (this.state.shows == null){
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
          <ScrollView style={styles.scrollView}>
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
            <View>
                <View id="image">
                    <Image /* source={{uri: imageurl}} */></Image>
                </View>
                <View id="info">
                    <Text id="albumName"></Text>
                    <Text id="bandName"></Text>
                </View>
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