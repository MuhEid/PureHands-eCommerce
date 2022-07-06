import React, { Fragment, useContext } from 'react';
import Slider from '../Layout/Slider';
import Button from '../UI/Button';
import FcIcon from '../../assets/asset 42.svg';
import TwIcon from '../../assets/asset 43.svg';
import LiIcon from '../../assets/asset 44.svg';
import InIcon from '../../assets/asset 45.svg';
import classes from './BuyProduct.module.css';
import CartContext from '../../store/cart-context';




const imageSource = [
  '/notebookTwo.jpg',
  '/notebookOne.jpg',
  '/notebookThree.jpg',
  '/notebookFour.jpg',
];

export default function BuyProduct() {

  const { addItemToCart } = useContext(CartContext);

  const handleAddBtn = () => {
    // console.log('horaaa', props)
    addItemToCart(1, 1);
  };

  return (
    <Fragment>
      <div className={classes['product-container']}>
        <div className={classes.slider}>
          <Slider sources={imageSource} />
        </div>
        <div className={classes.details}>
          <h1>Leather Notebook</h1>
          <h4>$40.00</h4>
          <Button value={'Add to cart'} click={handleAddBtn}/>
          <Button value={'Buy it now'} backColor={'#44533c'} textColor={'white'}/>
          <p>
            Currently there are <span>{Math.floor(Math.random() * 10)}</span>{' '}
            people looking at this product
          </p>
          <div className={classes.share}>
            <p>Share:</p>
            <img src={FcIcon} alt="" />
            <img src={TwIcon} alt="" />
            <img src={LiIcon} alt="" />
            <img src={InIcon} alt="" />
          </div>
          <p>Tags:</p>
          <p style={{ color: '#44533c', fontWeight:'bold' }}>#leather #handmade #notebooks</p>

          <div className={classes.reviews}>
            <h2>Customer reviews:</h2>
            <p>No reviews yet</p>
          </div>
        </div>
      </div>
      <h1 className={classes.like}>You may also like</h1>
    </Fragment>
  );
}
