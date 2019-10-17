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
  musicListItem: {
    flexDirection: 'column',
    width: 190,
    height: 200,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    overflow: 'hidden',
    marginBottom: 10,
  },
  musicListImage:{
    flex: 1,
    width: 190,
    resizeMode: 'stretch',
    
  },
  musicListTitle: {
    fontWeight: 'bold',
    padding: 2,
  },
  musicListSubTitle: {
    padding: 2,
  }
})