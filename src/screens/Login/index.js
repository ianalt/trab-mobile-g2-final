import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Switch,
  Alert,
  AsyncStorage,
} from 'react-native';
import { styles } from './styles';
import { useState, useContext } from 'react';
import AuthContext from '../../components/context/AuthContext';

export const Login = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const { login } = useContext(AuthContext);
  const [cpf, setCpf] = useState('');
  const [buttonisDisable, setbuttonisDisable] = React.useState(true);

  function checkCPF(cpf) {
    if (cpf.length === 11) {
      setbuttonisDisable(false);
    } else {
      setbuttonisDisable(true);
    }
  }

  async function verificaCpf(cpf) {
    login(cpf);
    const storageToken = await AsyncStorage.getItem('@token');
    if (storageToken === null) Alert.alert('Error', 'CPF inválido');
  }

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.Title}>Login</Text>
      </View>
      <View>
        <Text style={styles.TextInformation}>CPF</Text>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          secureTextEntry={true}
          onChange={(e) => setCpf(e.nativeEvent.text)}
          value={cpf}
          onBlur={() => {
            checkCPF(cpf);
          }}
        />
        <View style={styles.Line}></View>
      </View>
      <View style={styles.Complement}>
        <View>
          <Text style={styles.TextComplement}>Lembrar CPF</Text>
        </View>
        <View>
          <Switch
            style={styles.SwitchApp}
            trackColor={{ false: '#767577', true: '#1C2247' }}
            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#A4A4A3"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <KeyboardAvoidingView behavior={'position'}>
        <View>
          <TouchableOpacity
            id="botao"
            disabled={buttonisDisable}
            style={buttonisDisable ? styles.ButtonDisable : styles.ButtonEnable}
            onPress={(() => verificaCpf(cpf))}>
            <Text
              style={
                buttonisDisable
                  ? styles.TextButtonDisable
                  : styles.TextButtonEnable
              }>
              ENTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Login;
