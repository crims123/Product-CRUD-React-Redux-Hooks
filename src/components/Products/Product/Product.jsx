import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../actions/products';

function Product({ product: { name, price, id } }) {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold"> $ {price} </span>
      </td>
      <td className="acciones">
        <button type="button" className="btn btn-primary mr-2">
          Edit
        </button>
        <button
          onClick={handleDeleteProduct}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Product;
