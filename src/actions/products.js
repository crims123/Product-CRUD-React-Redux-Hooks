import Swal from 'sweetalert2';
import { request, success, error } from './base';
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
} from '../types';
import axiosClient from '../config/axios';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(request(GET_PRODUCTS_REQUEST, true));

    const { data: products } = await axiosClient.get('/products');

    dispatch(success(GET_PRODUCTS_SUCESS, products));
  } catch (err) {
    dispatch(error(GET_PRODUCTS_ERROR, true));
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch(request(ADD_PRODUCT_REQUEST, true));

    await axiosClient.post('/products', product);

    dispatch(success(ADD_PRODUCT_SUCESS, product));

    Swal.fire('Correct', 'The product was successfully added', 'success');
  } catch (err) {
    dispatch(error(ADD_PRODUCT_ERROR, true));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch(request(DELETE_PRODUCT_REQUEST, true));

    await axiosClient.delete(`/products/${id}`);

    dispatch(success(DELETE_PRODUCT_SUCESS, id));

    Swal.fire('Deleted', 'Product deleted sucess', 'success');
  } catch (err) {
    dispatch(error(DELETE_PRODUCT_ERROR, true));
  }
};
