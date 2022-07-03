import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrum from '../Layout/Breadcrum';
import Button from '../UI/Button';
import classes from './Cart.module.css';
import CartItems from './CartItems';

// TODO import data file and get the ids from local storage and then present them in cart item and loop over them
export default function Cart() {
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    localStorage.getItem('isLoggedIn') === '1'
      ? navigate('/payment')
      : navigate('/login');
  };

 

  return (
    <div>
      <Breadcrum />
      <section>
        <div className={classes['cart-body']}>
          <div className={classes['cart-header']}>
            <h3>Your cart</h3>
            <p>Continue shopping</p>
          </div>

          

          <CartItems/>       
     
        </div>

        <div className={classes['checkout']}>
          <h4>
            Subtotal <span>$45.00</span>
          </h4>
          <p>Taxes and shipping calculated at checkout</p>
          <Button value={'Check Out'} onClick={checkIfLoggedIn} />
        </div>
      </section>
    </div>
  );
}
