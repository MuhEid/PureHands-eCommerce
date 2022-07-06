import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import searchIcon from '../../assets/magnifying-glass.png' ;
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext, Fragment } from 'react';
import CartContext from '../../store/cart-context';
import HeaderLinks from './HeaderLinks';

export default function Navigation() {
  

  const { cartNum } = useContext(CartContext);

  return (
    <Fragment>
      <div className={classes.nav}>
        <HeaderLinks />

        <div className={classes.rightSide}>
          <form action="">
            <div className={classes.form}>
              <input type="text" placeholder="search" />
              <button>
                
                <img src={searchIcon} alt="" />
              </button>
            </div>
          </form>

          <PersonOutlinedIcon className={classes.big} />

          <div>
            <Link to="/cart" className={classes['cart-num']}>
              <ShoppingCartOutlinedIcon className={classes.big} />
              {cartNum !== 0 && <p>{cartNum}</p>}
            </Link>
          </div>
         
        </div>
      </div>
    </Fragment>
  );
}
