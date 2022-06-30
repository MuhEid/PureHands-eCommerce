import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './Cart.module.css';

export default function Cart() {
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    localStorage.getItem('isLoggedIn') === '1'
      ? navigate('/payment')
      : navigate('/login');
  };
  return (
    <div>
      <section>
        <div className={classes['cart-body']}>
          <div className={classes['cart-header']}>
            <h3>Your cart</h3>
            <p>Continue shopping</p>
          </div>

          <div className={classes['cart-td']}>
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
          </div>
          <div>render cart items here</div>
        </div>

        <div className={classes['checkout']}>
          <h4>
            Subtotal <span>$45.00</span>
          </h4>
          <p>Taxes and shipping calculated at checkout</p>
          <Button value={'Check Out'} onClick={checkIfLoggedIn}/>          
        </div>
      </section>
    </div>
  );
}
