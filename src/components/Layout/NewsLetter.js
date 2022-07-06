import React, { Fragment } from 'react';
import classes from './Intro.module.css';
import newsLetterBackground from '../../assets/asset 25.jpeg';
import sendIcon from '../../assets/asset 40.svg';

export default function NewsLetter() {
  return (
    <Fragment>
      <div className={classes.intro}>
        <img className={classes.background} src={newsLetterBackground} alt="" />
        <div className={classes.content}>
          <h1>Subscribe To Our Newsletter</h1>
          <p>Get On The List And Get 10% Off Your First Order!</p>
          <form action="">
            <div className={classes.form}>
              <input type="text" placeholder="Email" />
              <button>
                <img src={sendIcon} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
