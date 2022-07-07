import React, { Fragment } from 'react';
import Products from '../Products/Products';
import Intro from '../Layout/Intro';
import NewsLetter from '../Layout/NewsLetter';

export default function Home() {
  return (
    <Fragment>
      <Intro />      
      <Products headline={'Shop Our Bestsellers'} numb={4}/>
      <NewsLetter />
    </Fragment>
  );
}
