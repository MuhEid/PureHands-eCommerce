import React from 'react'
import Logo from '../UI/Logo'
import classes from './Header.module.css'
import Navigation from './Navigation'

export default function Header(props) {
  return (
    <div>
        <header className={classes.header}>

          <Logo />

          <Navigation className={classes.rightSide}/>

          
        </header>
    </div>
  )
}
