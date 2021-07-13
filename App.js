import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Router';

import { AuthProvider } from './src/components/context/AuthContext';
import { ProductProvider } from './src/components/context/ProductContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;