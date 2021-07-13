import React, {useContext} from 'react';
import { View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.route';
import AuthContext from '../components/context/AuthContext';

const Routes = () => {
    const {signed} = useContext(AuthContext)
    return signed ?  <AppRoutes/> : <AuthRoutes/>
}

export default Routes;