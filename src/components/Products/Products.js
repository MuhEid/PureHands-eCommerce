import React from 'react';
import DUMMY_DATA from '../../DATA.json';
import ProductList from './ProductList';
import classes from './Products.module.css'

export default function Products() {
  // const productList = DUMMY_DATA.map((product) => (
  //   <li>{product.productName}</li>
  // ));

  return (
    <div className={classes.list}>      
      <ProductList products={DUMMY_DATA} />
    </div>
  );
}
