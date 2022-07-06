import React, { Fragment } from 'react';
import Breadcrum from '../Layout/Breadcrum';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';



import './Login.css';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/welcome');
  };
  return (
    <Fragment>
      <Breadcrum location={'Create Account'} />
      <h1 className='page-head'>Create account</h1>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />            
          </div>

          <Button value={'Sign up'} backColor={'#44533c'} textColor={'white'} />
          
        </form>
      </div>
    </Fragment>
  );
}
