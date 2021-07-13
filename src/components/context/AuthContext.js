import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
    const [signed, setSigned] = useState()
    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        async function loadStorageData() {
            const storageToken = await AsyncStorage.getItem('@token');
            console.log(storageToken);
            if (storageToken) {
                setSigned(true)
            }
        }
        loadStorageData();
    },[]);

    useEffect(() => {
            api.get("funcionario").then ((res) => {
                setFuncionarios(res.data);
            });
    }, []);

     console.log(funcionarios);
    var cpfValido;
     function login (cpf) {
        cpfValido = null;
        funcionarios.filter((res) =>{
             console.log(res.cpf);
            if(res.cpf===cpf) {
                cpfValido = res.cpf;
                // return console.log("Encontrado");
            }
        });
        if(cpfValido !== null) {
            const token = Math.random().toString()
            console.log(token);
            setSigned(true)
            AsyncStorage.setItem('@token', token);
        }
         else {
            cpfValido = null;
         }
    }

    function logout () {
        setSigned(false);
        AsyncStorage.removeItem('@token')
        cpfValido = null;
    }

    return (
        <AuthContext.Provider value={{
            signed,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;