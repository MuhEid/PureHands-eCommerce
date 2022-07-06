import React from 'react';
import './Welcome.css'
import tree from '../../assets/asset 6.png';


export default function Welcome() {
  return (
    <div className='welcome'>
      <img src={tree} alt="" />
      <h1>Discover Our Collections</h1>


    </div>
  );
}
