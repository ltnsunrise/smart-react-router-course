import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDatabasePage = () => {
  const params = useParams();
  console.log(params);
  return <div>ProductDatabasePage</div>;
};

export default ProductDatabasePage;
