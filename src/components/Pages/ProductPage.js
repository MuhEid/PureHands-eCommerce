import React, { Fragment } from 'react';
import Breadcrum from '../Layout/Breadcrum';
import BuyProduct from '../ProductPage/BuyProduct';

import Products from '../Products/Products';

export default function ProductPage() {
  return (
    <Fragment>
      <Breadcrum location={'Products'} />

      <BuyProduct />
      
      <Products headline={'You may also like'} numb={5}/>
    </Fragment>
  );
}
