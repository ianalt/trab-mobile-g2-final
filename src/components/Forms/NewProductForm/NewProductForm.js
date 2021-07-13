import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import ProductContext from '../../context/ProductContext';
import InputField from '../InputField/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './styles';

const NewProductForm = () => {
  const { saveProduto } = useContext(ProductContext);

  const FormSchema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório.'),

    descricao: Yup.string().required('Campo obrigatório.'),

    qtdEstoque: Yup.number()
      .typeError('Campo precisa ser um número.')
      .positive('Número precisa ser maior que 0.')
      .required('Campo obrigatório.'),

    valor: Yup.number()
      .typeError('Campo precisa ser um número.')
      .positive('Número precisa ser maior que 0.')
      .required('Campo obrigatório.'),

    idCategoria: Yup.number()
      .typeError('Campo precisa ser um número.')
      .positive('Número precisa ser maior que 0.')
      .required('Campo obrigatório'),

    idFuncionario: Yup.number()
      .typeError('Campo precisa ser um número.')
      .positive('Número precisa ser maior que 0.')
      .required('Campo obrigatório'),

    nomeFuncionario: Yup.string().required('Campo obrigatório'),

    dataFabricacao: Yup.string().required('Campo obrigatório'),
  });

  const { handleChange, handleSubmit, handleBlur, errors, touched } = useFormik(
    {
      validationSchema: FormSchema,
      initialValues: {
        nome: '',
        descricao: '',
        qtdEstoque: '',
        valor: '',
        idCategoria: '',
        idFuncionario: '',
        nomeFuncionario: '',
        dataFabricacao: '',
        fotoLink: null,
      },
      onSubmit: (values) => saveProduto(values),
    }
  );

  return (
    <View style={styles.Container}>
      <View style={styles.Box}>
        <InputField
          onBlur={handleBlur('nome')}
          error={errors.nome}
          touched={touched.nome}
          placeholder="Nome *"
          onChangeText={handleChange('nome')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          onBlur={handleBlur('descricao')}
          error={errors.descricao}
          touched={touched.descricao}
          placeholder="Descrição *"
          onChangeText={handleChange('descricao')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          keyboardType="numeric"
          onBlur={handleBlur('qtdEstoque')}
          error={errors.qtdEstoque}
          touched={touched.qtdEstoque}
          placeholder="Quantidade em estoque *"
          onChangeText={handleChange('qtdEstoque')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          keyboardType="numeric"
          onBlur={handleBlur('valor')}
          error={errors.valor}
          touched={touched.valor}
          placeholder="Valor unitário *"
          onChangeText={handleChange('valor')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          kkeyboardType="numeric"
          onBlur={handleBlur('idCategoria')}
          error={errors.idCategoria}
          touched={touched.idCategoria}
          placeholder="Código de categoria *"
          onChangeText={handleChange('idCategoria')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          keyboardType="numeric"
          onBlur={handleBlur('idFuncionario')}
          error={errors.idFuncionario}
          touched={touched.idFuncionario}
          placeholder="Código de funcionário *"
          onChangeText={handleChange('idFuncionario')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          onBlur={handleBlur('nome')}
          error={errors.nome}
          touched={touched.nome}
          placeholder="dd-MM-AA *"
          onChangeText={handleChange('dataFabricacao')}
        />
      </View>
      <View style={styles.Box}>
        <InputField
          onBlur={handleBlur('fotoLink')}
          error={errors.fotoLink}
          touched={touched.fotoLink}
          placeholder="Link da foto"
          onChangeText={handleChange('fotoLink')}
        />
      </View>
      <Text style={styles.Important}>Campos com "*" são obrigatórios.</Text>
      <TouchableOpacity style={styles.ButtonGetOut} onPress={handleSubmit}>
        <Text style={styles.TextButtonGetOut}>INSERIR NOVO PRODUTO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewProductForm;
