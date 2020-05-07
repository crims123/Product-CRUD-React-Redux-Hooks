import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCESS,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCESS,
  DELETE_PRODUCT_ERROR,
  ADD_CURRENT_PRODUCT,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCESS,
  EDIT_PRODUCT_ERROR,
} from '../types';

const initialState = {
  data: [],
  error: null,
  loading: false,
  currentProduct: null,
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

    case DELETE_PRODUCT_REQUEST:
      return { ...state, loading: action.payload };

    case DELETE_PRODUCT_SUCESS:
      return {
        ...state,
        data: [
          ...state.data.filter((product) => product.id !== action.payload),
        ],
        loading: false,
        error: null,
      };

    case DELETE_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    case ADD_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };

    case EDIT_PRODUCT_REQUEST:
      return { ...state, loading: action.payload };

    case EDIT_PRODUCT_SUCESS:
      return {
        ...state,
        data: state.data.map((product) => {
          if (product.id === action.payload.id) {
            product = action.payload;
          }
          return product;
        }),
        loading: false,
        error: null,
        currentProduct: null,
      };

    case EDIT_PRODUCT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
export default products;
