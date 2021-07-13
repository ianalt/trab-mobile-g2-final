import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens/Login';

const Stack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        </Stack.Navigator>

    )
};

export default AuthRoutes;