const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#639CD9',
    height: '100%',
    paddingHorizontal: '10%',
  },
  Title: {
    fontSize: 30,
    color: '#fff',
    paddingTop: '35%',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  TextInformation: {
    color: '#fff',
    fontSize: 18,
    paddingTop: '35%',
    fontWeight: 'bold',
  },
  TextInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '10%',
    color: '#fff',
  },
  Line: {
    height: 4,
    backgroundColor: '#1C2247',
  },
  TextComplement: {
    color: '#fff',
    fontSize: 15,
    paddingTop: '3%',
    marginStart: '45%',
  },
  SwitchApp: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginStart: '20%',
    marginTop: '-8%',
  },
  ButtonEnable: {
    borderRadius: 5,
    height: '15%',
    marginHorizontal: '20%',
    marginVertical: '50%',
    marginBottom: 35,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  ButtonDisable: {
    borderRadius: 5,
    height: '15%',
    marginHorizontal: '20%',
    marginVertical: '50%',
    marginBottom: 35,
    justifyContent: 'center',
    backgroundColor: '#639CD9',
  },
  TextButtonEnable: {
    color: '#1C2247',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextButtonDisable: {
    color: '#639CD9',
    fontSize: 18,
    textAlign: 'center',
  },
});