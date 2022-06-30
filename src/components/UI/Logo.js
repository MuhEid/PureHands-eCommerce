import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <p className={classes.pure}>
          Pure{' '}
          <span className={classes.hands} id="hands">
            Hands
          </span>
        </p>
      </Link>
    </div>
  );
}
