import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Breadcrum from '../Layout/Breadcrum';
import Button from '../UI/Button';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('isLoggedIn', '1');
    navigate('/welcome');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <Fragment>
      <Breadcrum location={'Account'} />
      <h1 className='page-head'>Login</h1>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <input type="text" />
            <input type="password" />
            <p>Forgot password?</p>
          </div>

          <Button value={'Sign in'} backColor={'#44533c'} textColor={'white'} />
          <Link to={'/register'} style={{textAlign:'center'}}>Create account</Link>
        </form>
      </div>
    </Fragment>
  );
}
