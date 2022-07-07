import React, { useContext } from 'react';
import classes from './CartItems.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

export default function CartItems() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div className={classes.table}>
      <div className={classes['cart-th']}>
        <p style={{ width:'50%', marginLeft:'110px' }}>PRODUCT</p>
        <p style={{ width:'20%'}}>PRICE</p>
        <p>QUANTITY</p>
        <p style={{ marginLeft:'10px'}}>TOTAL</p>
      </div>
      <div >
        {itemsInCart.map((item) => (
          <CartItem
            price={item.price}
            name={item.productName}
            id={item.id}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
