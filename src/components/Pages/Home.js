import React, { Fragment } from 'react';
import Products from '../Products/Products';
import slideOne from '../../assets/imgonline-com-ua-resize-0pI1srjjyBD.jpg';
import Slider from '../Layout/Slider';
import Intro from '../Layout/Intro';


export default function Home() {
  return (
    <Fragment>
      <Intro/>
      <Slider />
      {/* <img src={slideOne} alt="" /> */}
      <Products />
    </Fragment>
  );
}
