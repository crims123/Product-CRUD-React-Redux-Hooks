import Swal from 'sweetalert2';
import { request, success, error } from './base';
import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCESS,
  ADD_PRODUCT_ERROR,
} from '../types';
import axiosClient from '../config/axios';

export const createProduct = (product) => async (dispatch) => {
  try {
    dispatch(request(ADD_PRODUCT_REQUEST, true));

    Swal.fire('Correct', 'The product was successfully added', 'success');

    await axiosClient.post('/products', product);

    dispatch(success(ADD_PRODUCT_SUCESS, product));
  } catch (err) {
    dispatch(error(ADD_PRODUCT_ERROR, true));
  }
};
