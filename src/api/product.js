import axios from "axios"

const BASE_URL = 'https://6900f2b5ff8d792314bc19f7.mockapi.io/products';

export const fetchProducts = async () => {
    const res = await axios.get(BASE_URL);
    const data = await res.data;

    return data.map((product) => ({
        ...product,
        price: Number(product.price).toFixed(2)
    }));
};

export const addProduct = async (newProduct) => {
    const res = await axios.post(BASE_URL, newProduct);
    return res.data
}

export const deleteProduct = async (productId) => {
    const res = await axios.delete(`${BASE_URL}/${productId}`);
    return res.data
}

export const editProduct = async (productId, editData) => {
    const res = await axios.put(`${BASE_URL}/${productId}`, editData);
    return res.data
} 
