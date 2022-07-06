import { Fragment } from 'react';


export default function SliderImage(props) {
  return (
    <Fragment>
      <img src={require('../../assets' + props.path)} alt="" />
    </Fragment>
  );
}
