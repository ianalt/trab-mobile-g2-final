import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Products} from '../components/Products/Products';
import {CadastrarProduto} from '../screens/CadastrarProduto';
import {AtualizarProduto} from '../screens/AtualizarProduto';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Produtos" component={Products} options={{ headerShown: false }}/>
            <Stack.Screen name="CadastrarProduto" component={CadastrarProduto} options={{ headerShown: false }}/>
            <Stack.Screen name="AtualizarProduto" component={AtualizarProduto} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}

export default AppRoutes;