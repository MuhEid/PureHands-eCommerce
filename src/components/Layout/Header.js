import React, { useState } from 'react';
import Logo from '../UI/Logo';
import classes from './Header.module.css';
import Navigation from './Navigation';

export default function Header(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      <p className={classes.offer}>
        Receive 10% Off & Free Shipping On Orders Over 50$
      </p>
      <header className={classes.header}>
        <Logo />
        <Navigation className={classes.navigation}/>
      </header>
    </div>
  );
}
