import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '../../components/UI/Button';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import classes from './ProductCard.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';


export default function ProductCard(props) {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate() 

  const goToElement = ()=>{
    navigate(`/allproducts/${props.id}`)
  }
  const handleAddBtn = () => {
    addItemToCart(props.id, 1);
  };

  return (
    <li className={classes.productCard}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="345"
          image={require('../../assets' + props.image[0])}
          alt="Paella dish"
        />
        <CardContent>
          <h3>{props.productName}</h3>         
          <p>${props.price}</p>
          <button onClick={goToElement} className={classes.btn}>See details</button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button value={'Add to Cart'} click={handleAddBtn} />
        </CardActions>
      </Card>
    </li>
  );
}
