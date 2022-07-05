import React, { Fragment } from 'react';
import Breadcrum from '../Layout/Breadcrum';
import Slider from '../Layout/Slider';
import Button from '../UI/Button';
import FcIcon from '../../assets/asset 42.svg';
import TwIcon from '../../assets/asset 43.svg';
import LiIcon from '../../assets/asset 44.svg';
import InIcon from '../../assets/asset 45.svg';
import Products from '../Products/Products';

const imageSource = [
  '/notebookOne.jpg',
  '/notebookTwo.jpg',
  '/notebookThree.jpg',
  '/notebookFour.jpg',
];

export default function ProductPage() {
  return (
    <Fragment>
      <Breadcrum />

      <div
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ width: '300px', height: '300px' }}>
          <Slider sources={imageSource} />
        </div>
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

        <h3>You may also like</h3>
      </div>
      <Products />
    </Fragment>
  );
}
