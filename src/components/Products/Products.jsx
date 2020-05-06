import React, {Fragment} from 'react';

function Products() {
  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>

      {/* {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      ) : null}

      {cargando ? <p className="text-center">Cargando....</p> : null} */}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {productos.length === 0
            ? 'No hay productos'
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody> */}
      </table>
    </Fragment>
  );
}

export default Products;
