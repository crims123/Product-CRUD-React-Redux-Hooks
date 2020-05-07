import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/products';
import Product from './Product';

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>

      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Server Error
        </p>
      ) : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products && products.length === 0
            ? 'There are no products'
            : products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Products;
