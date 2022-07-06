import React from 'react';
import DUMMY_DATA from '../../DATA.json';
import ProductList from './ProductList';
import classes from './Products.module.css';
import tree from '../../assets/asset 6.png';

export default function Products() {
  

  return (
    <div className={classes.list}>
      <img src={tree} alt="" className={classes.tree}/>
      <h1 className={classes.headline}>Shop Our Bestsellers</h1>
      <ProductList products={DUMMY_DATA} />
    </div>
  );
}
