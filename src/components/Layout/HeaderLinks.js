import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './HeaderLinks.module.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={classes.sidebar}>
      <div className={classes.list} id={showSidebar ? `${classes.hidden}` : ''}>
        <Link to="/">HOME</Link>
        <Link to="/allproducts">SHOP</Link>
        <Link to="/allproducts">PRODUCTS</Link>
        <Link to="/allproducts">CONTACT</Link>
        <Link to="/allproducts">ABOUT</Link>
        <Link to="/login">LOGIN</Link>
      </div>

      <button
        className={classes.btn}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <MenuIcon />
      </button>
    </div>
  );
}
