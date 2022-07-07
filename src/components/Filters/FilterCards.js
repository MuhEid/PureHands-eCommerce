import React from 'react';
import Card from './Card.js'

import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const FilterCards = ({ item }) => {
    const { addItemToCart } = useContext(CartContext);

    const handleAddBtn = () => {
        addItemToCart(item.id, 1);
      };

      console.log(item);

    
  return (
    <>
    {item.map((product) => (
        <Card         
        key={product.id}
        id={product.id}
        image={product.image}
        productName={product.productName}
        price={product.price}
        
        />
        //   <ProductCard
           
        //   />
        ))}
      
    </>
  );
};

export default FilterCards;
