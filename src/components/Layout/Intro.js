import { Fragment } from 'react';
import classes from './Intro.module.css';
import intro from '../../assets/pure hands.jpg';

export default function Intro() {
  return (
    <Fragment>
      <div className={classes.intro}>
        <img className={classes.background} src={intro} alt="" />
      </div>
    </Fragment>
  );
}
