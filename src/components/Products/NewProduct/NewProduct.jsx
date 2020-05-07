import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';
import { createProduct } from '../../../actions/products';

function NewProduct() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.products.error);

  const [values, handleChange] = useInput({
    name: '',
    price: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = values;
    dispatch(createProduct(product));
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>

            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Server Error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
