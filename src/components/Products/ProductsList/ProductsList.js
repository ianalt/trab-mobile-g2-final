import React, { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import { FlatList } from 'react-native';
import ProductBox from '../ProductBox/ProductBox';

const ProductsList = () => {

    const {
        produtos,
        produtoById,
        isSingleProduct,
        produtosByCategoria,
        isByCategory,
    } = useContext(ProductContext);

    return (

        <>
            <FlatList
                data={isByCategory ? produtosByCategoria : (isSingleProduct ? produtoById : produtos)}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductBox product={item}
                />}
            />

        </>

    );
};

export default ProductsList;