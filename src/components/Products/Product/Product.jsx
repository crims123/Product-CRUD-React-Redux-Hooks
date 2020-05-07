import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteProduct, addCurrentProduct } from '../../../actions/products';

function Product({ product, product: { name, price, id } }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleEditProduct = () => {
    dispatch(addCurrentProduct(product));
    history.push(`/products/edit/${id}`);
  };

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
        <button
          onClick={handleEditProduct}
          type="button"
          className="btn btn-primary mr-2"
        >
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
