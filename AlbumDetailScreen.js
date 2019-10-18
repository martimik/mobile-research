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
        this.state = { album: null };
    }

    componentDidMount(){

    }

    itemPressed = (index) => {
        this.props.navigation.navigate('PlayerScreen',
        {song: this.state.album.song[index]});
    }

    render() {
  
        if (this.state.album == null){
          return(
            <View style={{flex: 1, padding: 20}}>
              <Text style={styles.text}>Loading, please wait...</Text>
            </View>
          )
        }
        var items = this.state.album.song.map(function(song,index){
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
        return (
        <Fragment>
            <View style={Styles.songListHeader}>
                <Image style={Styles.songListHeaderImage} source={require('./cover.jpg')}></Image>
                <Text style={Styles.songListHeaderTitle}>Album name</Text>
                <Text style={Styles.songListHeaderSubTitle}>Artist name</Text>
            </View>
            <SongList navigation={this.props.navigation}/>
        </Fragment>
        );
    }
};