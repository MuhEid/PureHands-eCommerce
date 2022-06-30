import React from 'react';
import DUMMY_DATA from '../../DATA.json';
import ProductCard from './ProductCard';

export default function Products(props) {
  const productList = DUMMY_DATA.map((product) => (    
    <li>{product.productName}</li>
  ));

  return (
    <section>
      <ProductCard id={DUMMY_DATA.id}/>
      <ul>{productList}</ul>
    </section>
  );
}
