/* eslint-disable max-len */
const GET_PRODUCTS = 'crypto-metrics/src/redux/GET_PRODUCTS';
const SEARCH_PRODUCT = 'crypto-metrics/src/redux/SEARCH_PRODUCT';

const initialState = {
  products: [],
  filtered: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case SEARCH_PRODUCT:
      /* eslint-disable no-case-declarations */
      const filteredProducts = state.products.filter((product) => product.title.toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        filtered: action.payload === '' ? [] : filteredProducts,
      };
    default:
      return state;
  }
};

export default ProductReducer;

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const searchProduct = (text) => ({
  type: SEARCH_PRODUCT,
  payload: text,
});

export const fetchProducts = () => async (dispatch) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  const products = data.map((product) => ({
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    category: product.category,
    description: product.description,
    rating: product.rating.rate,
  }));
  dispatch(getProducts(products));
};
