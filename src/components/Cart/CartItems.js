import React, { useContext } from 'react';
import classes from './CartItems.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

export default function CartItems() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div>
      <table className={classes.table}>
        <thead className={classes['cart-td']}>
          <th>PRODUCT</th>
          <th></th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th></th>
          <th>TOTAL</th>
        </thead>
        {itemsInCart.map((item) => (
          <CartItem price={item.price} name={item.productName} id={item.id} quantity={item.quantity} image={item.image}/>
        ))}
      </table>
    </div>
  );
}
