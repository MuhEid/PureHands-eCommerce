import React from 'react';
import DUMMY_DATA from '../../DATA.json';
import classes from './CartItems.module.css';
import macrame from '../../assets/mac3.webp';
// import DeleteIcon from '@mui/icons-material/Delete';
import TrashIcon from '../../assets/delete.png';
// import { readDataFromLS } from '../../helpers/getData';

export default function CartItems() {
  //   let productsInCart = readDataFromLS()
  //   console.log(productsInCart)

  const removeFromCart = (id) => {
    //   let productsInCart = readDataFromLS()
    //   productsInCart = productsInCart.filter((product)=>id !== product.id)
    //   console.log(productsInCart);
    console.log('clicked');
  };
  const getCartItems = () => {
    let cartItem = localStorage.getItem('items');
    cartItem = JSON.parse(cartItem);
    // console.log(DUMMY_DATA);
    return cartItem.map(
      (d) => {
        for (let item of DUMMY_DATA) {
          if (d.id === item.id) {
            return (
              <tr>
                <td>
                  <img src={macrame} alt="" />
                </td>
                <td style={{ textAlign: 'left' }}>{item.productName}</td>
                <td>{item.price}</td>
                <td>{d.quantity}</td>
                <td className={classes.trash}>
                  <button onClick={removeFromCart(item.id)}>
                    {' '}
                    <img
                      src={TrashIcon}
                      alt=""
                      style={{ width: '24px', height: '24px' }}
                    />{' '}
                  </button>
                </td>
                <td>${item.price * d.quantity}</td>
              </tr>
            );
          }
        }
      }
      // d.id === DUMMY_DATA.id
      //   ? console.log(DUMMY_DATA.productName)
      //   : console.log('wronge')
    );
  };
  return (
    <div>
      <table className={classes.table}>
        <thead className={classes['cart-td']}>
          <td>PRODUCT</td>
          <td></td>
          <td>PRICE</td>
          <td>QUANTITY</td>
          <td></td>
          <td>TOTAL</td>
        </thead>
        {getCartItems()}
      </table>
    </div>
  );
}
