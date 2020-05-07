import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
} from '../types';

const initialState = {
  data: [],
  error: null,
  loading: false,
};

function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: action.payload };

    case GET_PRODUCTS_SUCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case GET_PRODUCTS_ERROR:
      return { ...state, error: action.payload };

    case ADD_PRODUCT_REQUEST:
      return { ...state, loading: action.payload };

    case ADD_PRODUCT_SUCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };

    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
export default products;
