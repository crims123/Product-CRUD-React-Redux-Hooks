import React from 'react';

function Product({ product: { name, price } }) {
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
        <button type="button" className="btn btn-danger">
          Delete{' '}
        </button>
      </td>
    </tr>
  );
}

export default Product;
