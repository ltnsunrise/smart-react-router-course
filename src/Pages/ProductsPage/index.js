import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const ProductsPage = () => {
  const { url } = useRouteMatch();

  const products = [
    { id: 1, name: 'product 1' },
    { id: 2, name: 'product 2' },
    { id: 3, name: 'product 3' },
    { id: 4, name: 'product 4' },
  ];
  return (
    <>
      {products.map((product) => (
        <main key={product.id}>
          <Link to={`${url}/${product.id}`}>{product.name}</Link>
        </main>
      ))}
    </>
  );
};

export default ProductsPage;
