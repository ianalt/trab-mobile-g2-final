import React, { createContext, useState, useEffect } from 'react';

import ProductService from '../../services/ProductService/ProductService';
import api from '../../services/api';


const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {

    const [reload, setReload] = useState(false);
    const [produtos, setProdutos] = useState([]);
    const [produtoById, setProdutoById] = useState([]);
    const [isSingleProduct, setIsSingleProduct] = useState(false);
    const [produtosByCategoria, setProdutosByCategoria] = useState([]);
    const [isByCategory, setIsByCategory] = useState(false);

    useEffect(() => {
        ProductService.getAllProducts()
            .then((res) => setProdutos(res.data))
            .catch((error) => console.log(error));
    }, [reload]);

    /******************************** REQUISIÇÕES ********************************/

    const findProdutoById = (id) => {
        ProductService.getProductById(id)
            .then((res) => {
                setProdutoById([res.data]);
                setIsSingleProduct(!isSingleProduct);
                setIsByCategory(false);
            })
            .catch((error) => console.log(error));
    };

    const findByCategoria = (id) => {

        setProdutosByCategoria(produtos.filter(produto => produto.idCategoria === id));
        setIsByCategory(!isByCategory);
        setIsSingleProduct(false);
    };

    const saveProduto = (valores) => {
        console.log('VALORES = \n\n', valores);
        ProductService.saveProduct(valores)
            .then((res) => {
                setProdutos(...produtos, res.data);
                console.log(produtos);
                setReload(!reload);
            })
            .catch((error) => console.log(error));
    };

    const deleteProduto = (id) => {
        ProductService.deleteProduct(id)
            .then(() => {
                setProdutos(produtos.filter(() => { return produtos.id !== id; }));
                setIsSingleProduct(false);
                setIsByCategory(false);
                setReload(!reload);
            })
            .catch((error) => console.log(error));
    };

    const updateProduto = (id, valores) => {
        api.put(`/produto/${id}`, valores)
            .then(() => setReload(!reload))
            .catch((error) => console.log(error));
    };

    return (

        <ProductContext.Provider value={{
            produtos,
            produtoById,
            isSingleProduct,
            produtosByCategoria,
            isByCategory,
            findProdutoById,
            findByCategoria,
            saveProduto,
            deleteProduto,
            updateProduto,
        }}>
            {children}
        </ProductContext.Provider>

    );
};

export default ProductContext;