import classes from './CartItems.module.css';
import React, { Fragment, useContext } from 'react';
import TrashIcon from '../../assets/delete.png';
import CartContext from '../../store/cart-context';

export default function CartItem(props) {
  const { removeItemFromCart } = useContext(CartContext);
  const handleRemoveFromCart = () => {
    removeItemFromCart(props.id);
  };

  let price = `$${props.price.toFixed(2)}`;
  let total = `$${(props.price * props.quantity).toFixed(2)}`;

  return (
    <div className={classes['cart-td']}>
      <p>
        <img src={require('../../assets' + props.image[0])} alt="" />
      </p>
      <p style={{ width: '50%' }}>{props.name}</p>
      <p style={{ width: '20%' }}>{price}</p>
      <p>{props.quantity}</p>
      <p>{total}</p>
      <p className={classes.trash}>
        <button onClick={handleRemoveFromCart}>
          <img
            src={TrashIcon}
            alt=""
            style={{ width: '24px', height: '24px' }}
          />
        </button>
      </p>
    </div>
  );
}
