import React from 'react';
import ProductCard from './ProductCard';
import classes from './ProductList.module.css';

export default function ProductList(props) {

  // console.log(props.products);
  return (
    <div >
      <ul className={classes.row}>
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id} 
            image={product.image}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </ul>
    </div> 
  );
}
