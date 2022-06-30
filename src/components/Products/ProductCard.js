import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '../../components/UI/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { addToLocalStorage } from '../../helpers/getData'
import macrame from '../../assets/mac3.webp'



export default function ProductCard(props) {  
  
  const handleAddToCart = ()=>{
    addToLocalStorage(props.id)
    // if(isAddedBefore()) will add 1

  }

  return (
    <Card sx={{ maxWidth: 345 }}>      
      <CardMedia 
        component="img"
        height="345"
        image={macrame}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button value={'Add to Cart'} onClick={handleAddToCart}/>      
      </CardActions>      
    </Card>
  );
}
