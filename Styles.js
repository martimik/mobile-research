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
        padding: 20,
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
        flexWrap: 'wrap'
      },
})