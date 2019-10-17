import React, {Fragment} from 'react';
import styles from './Styles.js';

import {
    ScrollView,
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { songs: null };
    } 
}

export default class AlbumDetailScreen extends React.Component {
    render() {
        return (
        <Fragment>
            <View>
                <Image></Image>
                <Text>Album name</Text>
                <Text>Artist name</Text>
            </View>
            <SongList navigation={this.props.navigation}/>
        </Fragment>
        );
    }
};