import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo';
import classes from './Footer.module.css';
import FcIcon from '../../assets/asset 42.svg';
import TwIcon from '../../assets/asset 43.svg';
import LiIcon from '../../assets/asset 44.svg';
import InIcon from '../../assets/asset 45.svg';

export default function Footer() {
  return (
    <div>
      <div className={classes['footer']}>
        <div className={classes['container']}>
          <div className={classes['row']}>
            <div className={classes['footerLogo']}>
              <Logo />
              <div className={classes['footerIcons']}>
                <div className={classes.icons}>
                  <img src={FcIcon} alt="" />
                  <img src={TwIcon} alt="" />
                  <img src={LiIcon} alt="" />
                  <img src={InIcon} alt="" />
                </div>
              </div>
            </div>

            <div className={classes['footerDetails']}>
              <h3>CONTACT US</h3>
              <p>Feel free to reach out to us in case of any queries.</p>
              <div className={classes['contact-info']}>
                <img src="assets/icons8-phone-24.png" alt="" />
                <p>+20 1112 4058 07</p>
              </div>
            </div>

            <div className={classes['footerLinks']}>
              <h3>INFORMATION</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className={classes['copyright']}>
            Copyright &#169; 2022, Pure Hands Powered By Muhammed Eid
          </p>
        </div>
      </div>
    </div>
  );
}
