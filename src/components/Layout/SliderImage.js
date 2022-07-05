import { Fragment } from 'react';
import SlideOne from '../../assets/boho-bedroom.png.webp';

export default function SliderImage(props) {
  return (
    <Fragment>
      <img src={require('../../assets' + props.path)} alt="" />
    </Fragment>
  );
}
