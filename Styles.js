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
    backgroundColor: '#F5F5F5',
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
    height: 230,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  albumListImage:{
    width: 190,
    height: 180,
    resizeMode: 'stretch',
  },
  albumListTitle: {
    fontWeight: 'bold',
    padding: 2,
    height: 23,
    overflow: 'hidden'
  },
  albumListSubTitle: {
    padding: 2,
  },
  songListHeader: {
    flexDirection: 'column',
    width: '100%',
    height: 450,
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
    padding: 5,
    paddingLeft: 10
  
  },
  songListHeaderSubTitle:{
    fontSize: 20,
    paddingLeft: 10,
    textAlignVertical: 'center'
  },
  songScrollView:{
    flexDirection: 'column'
  },
  songListItem:{
    flexDirection: 'row',
    margin: 5,
    padding: 20,
    alignItems: 'baseline'
  },
  songListItemNumber: {
    fontSize: 15,
    fontStyle: 'italic',
    paddingLeft: 10,
    textAlign: 'center',
  },
  songListItemTitle: {
    flex: 2,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 18,
  },
  songListItemTime: {
    fontSize: 15,
    paddingRight: 10,
    textAlign: 'center',
  }
})