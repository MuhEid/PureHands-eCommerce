import React, { Fragment, useContext } from 'react';
import Slider from '../Layout/Slider';
import Button from '../UI/Button';
import FcIcon from '../../assets/asset 42.svg';
import TwIcon from '../../assets/asset 43.svg';
import LiIcon from '../../assets/asset 44.svg';
import InIcon from '../../assets/asset 45.svg';
import classes from './BuyProduct.module.css';
import CartContext from '../../store/cart-context';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../DATA.json';
import plusIcon from '../../assets/asset 38.svg'
import minusIcon from '../../assets/asset 37.svg'




export default function BuyProduct(props) {

  const navigate = useNavigate();

  const goToPayment = ()=>{
    navigate('/payment')
  }

  let { id } = useParams();

  const { addItemToCart , itemsInCart } = useContext(CartContext);

  let thisProduct = itemsInCart.filter((p)=> p.id == id)

  const  handleQuantityShowing = (test)=>{
    if(test){
      test.push({quantity:0});    
    }
    return test
  }
 let test = handleQuantityShowing(thisProduct)[0].quantity;


  const ele = data.filter((item) => item.id === parseInt(id)) 
  let price = `$${ele[0].price.toFixed(2)}`

  const handleAddBtn = () => {    
    addItemToCart(ele[0].id, 1);
  };

  return (
    <Fragment>
     
        <div className={classes['product-container']}>
          <div className={classes.slider}>
            <Slider sources={ele[0].image} />
          </div>
          <div className={classes.details}>
            <h1>{ele[0].productName}</h1>
            <h3>{price}</h3>
            <div className={classes.counter}>
              <button><img src={minusIcon} alt="" /></button>
              <p>{test || thisProduct[0].quantity}</p>
              <button onClick={handleAddBtn}><img src={plusIcon} alt="" /></button>
            </div>
            <Button value={'Add to cart'} click={handleAddBtn} />
            <Button
              value={'Buy it now'}
              backColor={'#44533c'}
              textColor={'white'}
              click={goToPayment}
            />
            <p>
              Currently there are <span>{Math.floor(Math.random() * 10)} </span> people looking at this product
            </p>
            <div className={classes.share}>
              <p>Share:</p>
              <img src={FcIcon} alt="" />
              <img src={TwIcon} alt="" />
              <img src={LiIcon} alt="" />
              <img src={InIcon} alt="" />
            </div>
            <p>Tags:</p>
            <p style={{ color: '#44533c', fontWeight: 'bold' }}>
              #leather #handmade #notebooks
            </p>

            <div className={classes.reviews}>
              <h2>Customer reviews:</h2>
              <p>No reviews yet</p>
            </div>
          </div>
        </div>    
      
    </Fragment>
  );
}


