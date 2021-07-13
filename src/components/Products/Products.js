import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../components/context/AuthContext';
import ProductContext from '../context/ProductContext';
import ProductBox from './ProductBox/ProductBox';
import { CadastrarProduto } from '../../screens/CadastrarProduto/index';
import ProductsList from './ProductsList/ProductsList';
import NewProductForm from '../Forms/NewProductForm/NewProductForm';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function Products({ navigation }) {
  const { findByCategoria, saveProduto } = useContext(ProductContext);

  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.Container}>
      <View style={styles.TitleButtonGetOut}>
        <View>
          <View style={styles.FlowRight}>
          </View>
          <TouchableOpacity
            style={styles.ButtonGetOut}
            onPress={() => logout()}>
            <Text style={styles.TextButtonGetOut}>SAIR</Text>
          </TouchableOpacity>
          <View style={styles.ViewTitle}>
            <Text style={styles.Title}>Categorias</Text>
          </View>
          <View
            style={{
              backgroundColor: '#292F50',
              height: 2,
              marginHorizontal: 18,
            }}></View>
        </View>
        <View style={styles.ListCategory}>
          <TouchableOpacity
            style={styles.Cards}
            onPress={() => findByCategoria(1)}>
            <Text style={styles.TextCards}>Informática</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Cards}
            onPress={() => findByCategoria(2)}>
            <Text style={styles.TextCards}>Escritório</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Cards}
            onPress={() => findByCategoria(3)}>
            <Text style={styles.TextCards}>Livraria</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ViewTitle2}>
        <Text style={styles.Title}>Produtos</Text>
      </View>
      <View
        style={{
          backgroundColor: '#292F50',
          height: 2,
          marginHorizontal: 18,
        }}></View>
      <TouchableOpacity
        style={styles.ButtonPlus2}
        onPress={() => navigation.navigate('CadastrarProduto')}>
        <Text style={styles.TextButtonPlus2}>Inserir Produto</Text>
      </TouchableOpacity>
      <ProductsList />
    </View>
  );
}
