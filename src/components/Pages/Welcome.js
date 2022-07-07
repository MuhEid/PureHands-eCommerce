import './Welcome.css';
import tree from '../../assets/asset 6.png';
import Filters from '../Filters/Filters';
import { Fragment } from 'react';
import Breadcrumb from '../Layout/Breadcrum.js';

export default function Welcome(props) {
  return (
    <Fragment>
      <Breadcrumb location={'Collections'}/>
      <div className="welcome">
        <img src={tree} alt="" />
        <h1>Discover Our Collections</h1>

        <Filters />
      </div>
    </Fragment>
  );
}
