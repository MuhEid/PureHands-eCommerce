import Button from '../../components/UI/Button';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';
import classes from './ProductCard.module.css';



export default function ProductCard(props) {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToElement = () => {
    navigate(`/allproducts/${props.id}`);
  };
  const handleAddBtn = () => {
    addItemToCart(props.id, 1);
  };

  console.log(props);

  return (
    <div className={classes.productCard} key={props.id}>
      <div className={classes['cart-image']}>
        <img src={require('../../assets' + props.image[0])} alt={props.title} />
      </div>
      <div className="card-body">
        <h3>{props.productName}</h3>

        <p>${props.price.toFixed(2)}</p>
        <button className={classes.btn} onClick={goToElement}>See details</button>

        <div className="card-text">{props.desc}</div>
      </div>
      <Button value={'Add to Cart'} click={handleAddBtn} />
    </div>
  );
}
