import axios from "axios"

const BASE_URL = 'https://6900f2b5ff8d792314bc19f7.mockapi.io/products';

export const PAGE_SIZE = 3;

export const fetchProducts = async () => {
    const res = await axios.get(BASE_URL);
    const data = await res.data;

    return data.map((product) => ({
        ...product,
        price: Number(product.price).toFixed(2)
    }));
};

export const dashboardFetchProducts = async (page = 1, limit = PAGE_SIZE) => {
    // request page with a sensible default page size
    const res = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);

        // some APIs return total count in headers (x-total-count);
        // if missing or invalid, fetch the full collection once to determine total count
        const totalFromHeader = Number(res.headers["x-total-count"]);
        let total = Number.isFinite(totalFromHeader) && totalFromHeader > 0
            ? totalFromHeader
            : null;

        if (total === null) {
            // fallback: request the full collection to compute total. This is a single extra request
            // only used when the header is absent; consider caching if this becomes expensive.
            try {
                const all = await axios.get(BASE_URL);
                total = Array.isArray(all.data) ? all.data.length : 0;
            } catch (err) {
                // final fallback to the page length
                total = Array.isArray(res.data) ? res.data.length : 0;
            }
        }

    return {
        data: res.data || [],
        total
    }
}

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
