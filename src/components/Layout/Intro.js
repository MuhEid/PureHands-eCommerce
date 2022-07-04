import { Fragment } from 'react';
import classes from './Intro.module.css';
import intro from '../../assets/intro.jpeg'
import tree from '../../assets/asset 6.png'

export default function Intro() {
  return <Fragment>
    <div className={classes.intro}>
        <img className={classes.background} src={intro} alt="" />
        <h1>All things <br/><span>Natural</span></h1>
        <img className={classes.tree} src={tree} alt="" />
    </div>
  </Fragment>;
}
