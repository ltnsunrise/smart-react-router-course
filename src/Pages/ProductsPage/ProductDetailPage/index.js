import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  console.log(useRouteMatch());

  return <div>Product id: {productId}</div>;
};

export default ProductDetailPage;
