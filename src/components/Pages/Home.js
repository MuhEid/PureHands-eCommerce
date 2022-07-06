import React, { Fragment } from 'react';
import Products from '../Products/Products';
import Slider from '../Layout/Slider';
import Intro from '../Layout/Intro';
import NewsLetter from '../Layout/NewsLetter';

const imageSource = [
  '/boho-bedroom.png.webp',
  '/Dussehra-Decoration-Ideas-For-Home-In-2021..jpg',
  '/m5.jpg',
  '/imgonline-com-ua-resize-0pI1srjjyBD.jpg',
];

export default function Home() {
  return (
    <Fragment>
      <Intro />
      {/* <Slider sources={imageSource} /> */}
      <Products />
      <NewsLetter/>
    </Fragment>
  );
}
