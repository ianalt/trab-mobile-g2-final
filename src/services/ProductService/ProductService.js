import api from '../api';

const getAllProducts = () => {
    return api.get('/produto');
};

const getProductById = (id) => {
    return api.get(`/produto/${id}`);
};

const saveProduct = (valores) => {
    return api.post('/produto', valores);
};

const deleteProduct = (id) => {
    return api.delete(`/produto/${id}`);
};

export default { getAllProducts, getProductById, saveProduct, deleteProduct };