import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '../../components/UI/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import macrame from '../../assets/mac3.webp';
import classes from './ProductCard.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

export default function ProductCard(props) {
  // const handleAddToCart = () => {
  //    addToLocalStorage(props.id);

  // };

  const { addItemToCart } = useContext(CartContext);

  const handleAddBtn = ()=>{
    // console.log('horaaa', props)
    addItemToCart(props.id , 1)
    
  }

  // console.log(props);

  return (
    <li className={classes.productCard}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="345"
          image={macrame}
          alt="Paella dish"
        />
        <CardContent>
          <h3>{props.productName}</h3>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <p>${props.price}</p>
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
