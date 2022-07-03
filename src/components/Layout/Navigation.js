import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';


export default function Navigation() {
  const [showSidebar, setShowSidebar] = useState(false);

  const cartCtx = useContext(CartContext);
  const numberofCartItems = cartCtx.items.length;
  return (
    <div className={classes.nav}>
      <div className={classes.list} id={showSidebar ? `${classes.hidden}` : ''}>
        <Link to="/">HOME</Link>
        <Link to="/allproducts">SHOP</Link>
        <Link to="/allproducts">PRODUCTS</Link>
        <Link to="/allproducts">CONTACT</Link>
        <Link to="/allproducts">ABOUT</Link>
        <Link to="/login">Sign In</Link>
      </div>

      <div className={classes.rightSide}>
        <Box
          className={classes.search}
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="input-with-icon-textfield"
            label="Search"
            color="success"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>

        <PersonOutlinedIcon className={classes.big} />

        <div>
          <Link to="/cart" className={classes['cart-num']}>
            <ShoppingCartOutlinedIcon className={classes.big} />
            <p>{numberofCartItems}</p>
          </Link>
        </div>

        <button
          className={classes.btn}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MenuIcon className={classes.menu} />
        </button>
      </div>
    </div>
  );
}
