import React from 'react';
import DUMMY_DATA from '../../DATA.json';

export default function Products() {
  const productList = DUMMY_DATA.map((product) => (
    <li>{product.productName}</li>
  ));

  return (
    <section>
      <ul>{productList}</ul>
    </section>
  );
}
