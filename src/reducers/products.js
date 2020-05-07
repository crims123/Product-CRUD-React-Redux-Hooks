import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
} from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false,
};

function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return { ...state, loading: action.payload };

    case ADD_PRODUCT_SUCESS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
export default products;
