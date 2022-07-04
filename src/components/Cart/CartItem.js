import classes from './CartItems.module.css';
import React, { useContext } from 'react';
import TrashIcon from '../../assets/delete.png';
import macrame from '../../assets/mac3.webp';
import CartContext from '../../store/cart-context';



export default function CartItem(props) {

  const { removeItemFromCart } = useContext(CartContext)
  const handleRemoveFromCart = ()=>{
    removeItemFromCart(props.id)
  }

 let price = `$${props.price.toFixed(2)}`
 let total = `$${(props.price * props.quantity).toFixed(2)}`

  
  return (
    <tbody>
      <tr>
        <td>
          <img src={macrame} alt="" />
        </td>
        <td style={{ textAlign: 'left' }}>{props.name}</td>
        <td>{price}</td>
        <td></td>
        <td className={classes.trash}>
          <button onClick={handleRemoveFromCart}>
            
            <img
              src={TrashIcon}
              alt=""
              style={{ width: '24px', height: '24px' }}
            />
          </button>
        </td>
        <td>{total}</td>
      </tr>
    </tbody>
  );
}
