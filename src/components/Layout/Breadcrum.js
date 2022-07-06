import React from 'react'
import classes from './BreadCrum.module.css'
import nextIcon from '../../assets/next.png'

export default function Breadcrum(props) {
  return (
    <div className={classes.breadcrum}>
      <p>
        Home <img src={nextIcon} alt="" /> {props.location}
      </p>

    </div>
  )
}
