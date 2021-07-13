const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#639CD9',
    height: '100%',
    flex: 1,
  },
  Title: {
    fontSize: 30,
    paddingTop: '10%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Box: {
    marginTop: '5%',
    marginHorizontal: '10%',
  },
  Important: {
    fontSize: 12,
    color: 'red',
    marginLeft: '10%',
  },
  ButtonGetOut: {
    marginTop: '8%',
    marginHorizontal: '23%',
  },
  TextButtonGetOut: {
    color: '#FFFFFF',
    fontSize: 14,
    borderWidth: 1,
    padding: 5,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default styles;