import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    justifyContent: 'center',
    backgroundColor: '#6600ff',
    padding: 20
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  player: {
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF'
  },
  text: {
    textAlign: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  albumListItem: {
    flexDirection: 'column',
    width: 190,
    height: 200,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    overflow: 'hidden',
    marginBottom: 10,
  },
  albumListImage:{
    flex: 1,
    width: 190,
    resizeMode: 'stretch',
  },
  albumListTitle: {
    fontWeight: 'bold',
    padding: 2,
  },
  albumListSubTitle: {
    padding: 2,
  },
  songListHeader: {
    flexDirection: 'column',
    width: '100%',
    height: 400,
    overflow: 'hidden',
  },
  songListHeaderImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'stretch',
  },
  songListHeaderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  
  },
  songListHeaderSubTitle:{
    fontSize: 20,
    paddingLeft: 5
  },
  songScrollView:{
    flexDirection: 'column'
  },
  songListItem:{
    flexDirection: 'row',
    margin: 5,
    padding: 20,
  },
  songListItemNumber: {
    fontSize: 20,
    fontStyle: 'italic',
    paddingLeft: 10
  },
  songListItemTitle: {
    flex: 2,
    textAlign: 'center',
    fontSize: 20,
  },
  songListItemTime: {
    fontSize: 20,
    alignSelf: 'flex-end',
    paddingRight: 10,
  }
})