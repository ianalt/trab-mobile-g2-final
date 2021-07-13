import React, { useContext } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button } from 'react-native';
import InputField from '../InputField/InputField';
import ProductContext from '../../context/ProductContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UpdateProductForm = ({ product }) => {

    const { setValores } = useContext(ProductContext);

    const FormSchema = Yup.object().shape({
        nome: Yup.string()
            .required('Campo obrigatório.'),

        descricao: Yup.string()
            .required('Campo obrigatório.'),

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

        nomeFuncionario: Yup.string()
            .required('Campo obrigatório'),

        dataFabricacao: Yup.string()
            .required('Campo obrigatório'),
    });

    const { handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched } = useFormik({
            validationSchema: FormSchema,
            initialValues: {
                nome: product.nome,
                descricao: product.descricao,
                qtdEstoque: product.qtdEstoque,
                valor: product.valor,
                idCategoria: product.idCategoria,
                idFuncionario: product.idFuncionario,
                nomeFuncionario: product.nomeFuncionario,
                dataFabricacao: product.dataFabricacao,
                fotoLink: product.fotoLink,
            },
            onSubmit: values => { setValores(values); },
        });

    return (
        <View style={{ borderWidth: 1, borderColor: '#f0f' }}>
            <InputField
                onBlur={handleBlur('nome')}
                error={errors.nome}
                touched={touched.nome}
                placeholder="Nome *"
                onChangeText={handleChange('nome')}
            />

            <InputField onBlur={handleBlur('descricao')}
                error={errors.descricao}
                touched={touched.descricao}
                placeholder="Descrição *"
                onChangeText={handleChange('descricao')}
            />

            <InputField onBlur={handleBlur('qtdEstoque')}
                error={errors.qtdEstoque}
                touched={touched.qtdEstoque}
                placeholder="Quantidade em estoque *"
                onChangeText={handleChange('qtdEstoque')}
            />

            <InputField
                onBlur={handleBlur('valor')}
                error={errors.valor}
                touched={touched.valor}
                placeholder="Valor unitário *"
                onChangeText={handleChange('valor')}
            />

            <InputField
                onBlur={handleBlur('idCategoria')}
                error={errors.idCategoria}
                touched={touched.idCategoria}
                placeholder="Código de categoria *"
                onChangeText={handleChange('idCategoria')}
            />

            <InputField
                onBlur={handleBlur('idFuncionario')}
                error={errors.idFuncionario}
                touched={touched.idFuncionario}
                placeholder="Código de funcionário *"
                onChangeText={handleChange('idFuncionario')}
            />

            <InputField
                onBlur={handleBlur('nomeFuncionario')}
                error={errors.nomeFuncionario}
                touched={touched.nomeFuncionario}
                placeholder="Nome do funcionário *"
                onChangeText={handleChange('nomeFuncionario')}
            />

            <InputField
                onBlur={handleBlur('nome')}
                error={errors.nome}
                touched={touched.nome}
                placeholder="dd-MM-AA *"
                onChangeText={handleChange('dataFabricacao')}
            />

            <InputField
                onBlur={handleBlur('fotoLink')}
                error={errors.fotoLink}
                touched={touched.fotoLink}
                placeholder="Link da foto"
                onChangeText={handleChange('fotoLink')}
            />

            <Text>Campos com "*" são obrigatórios.</Text>

            <TouchableOpacity onPress={handleSubmit}>
                <Text>ATUALIZAR PRODUTO</Text>
            </TouchableOpacity>

        </View>
    );
};

export default UpdateProductForm;