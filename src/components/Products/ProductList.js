import React from 'react';
import ProductCard from './ProductCard';
import classes from './ProductList.module.css';

export default function ProductList(props) {
  let test = props.products.filter((i) => i.id <= props.num);

  return (
    
      <div className={classes.row}>
        {test.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    
  );
}
