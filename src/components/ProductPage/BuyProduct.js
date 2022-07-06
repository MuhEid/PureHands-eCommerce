import React, { useContext } from 'react';
import Slider from '../Layout/Slider';
import Button from '../UI/Button';
import FcIcon from '../../assets/asset 42.svg';
import TwIcon from '../../assets/asset 43.svg';
import LiIcon from '../../assets/asset 44.svg';
import InIcon from '../../assets/asset 45.svg';
import CartContext from '../../store/cart-context';

const imageSource = [
  '/notebookOne.jpg',
  '/notebookTwo.jpg',
  '/notebookThree.jpg',
  '/notebookFour.jpg',
];

export default function BuyProduct() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    >
      <div style={{ width: '600px', height: '600px' }}>
        <Slider sources={imageSource} />
      </div>
      <div style={{ margin: '5rem 0' }}>
        <h1>Leather Notebook</h1>
        <Button value={'Add to cart'} />
        <Button value={'Buy it now'} />
        <p>
          Currently there are <span>{Math.floor(Math.random() * 10)}</span>{' '}
          peoples are currently looking at this product
        </p>
        <div style={{ width: '100px', height: '24px', display: 'flex' }}>
          <p>share:</p>
          <img
            src={FcIcon}
            alt=""
            style={{ width: '16px', height: '16px', marginLeft: '8px' }}
          />
          <img
            src={TwIcon}
            alt=""
            style={{ width: '16px', height: '16px', marginLeft: '8px' }}
          />
          <img
            src={LiIcon}
            alt=""
            style={{ width: '16px', height: '16px', marginLeft: '8px' }}
          />
          <img
            src={InIcon}
            alt=""
            style={{ width: '16px', height: '16px', marginLeft: '8px' }}
          />
        </div>
        <p>Tags:</p>
        <p>#Leather #handmade #notebooks</p>

        <div>
          <button>heart Icon wishlist</button>
          <h4>Customer reviews</h4>
          <p>There is no reviews yets</p>
        </div>
      </div>
    </div>
  );
}
