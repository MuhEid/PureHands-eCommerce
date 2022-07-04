import React, { Fragment } from 'react'
import classes from './Button.module.css'

export default function Button(props) {
  return (
    <Fragment>
        <button onClick={props.click} className={classes['btn']}>
            {props.value}
        </button>
    </Fragment>
  )
}
