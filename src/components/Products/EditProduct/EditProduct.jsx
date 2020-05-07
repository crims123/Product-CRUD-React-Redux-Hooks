import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProduct } from '../../../actions/products';
import useInput from '../../../hooks/useInput';

function EditProduct() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [values, handleChange, setValues] = useInput({
    name: '',
    price: '',
  });

  const product = useSelector((state) => state.products.currentProduct);
  useEffect(() => {
    setValues({ ...product });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedProduct = { ...product, ...values };
    dispatch(editProduct(modifiedProduct));
    e.target.reset();
    setValues({
      name: '',
      price: '',
    });
    history.push('/');
  };

  if (!product) return <p>Plase select a product to edit</p>;

  const { name, price } = product;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={name}
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder={price}
                  name="price"
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
