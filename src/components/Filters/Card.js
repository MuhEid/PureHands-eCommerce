import Button from '../UI/Button';
import './Filters.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
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
    <div className="card-container">
      <div className="card" key={props.id}>
        <div className="card-image">
          <img
            src={require('../../assets' + props.image[0])}
            alt={props.title}
          />
        </div>
        <div className="card-body">
          <h3>{props.productName}</h3>

          <p>${props.price.toFixed(2)}</p>

          <div className="card-text">{props.desc}</div>
        </div>
        <Button value={'Add to Cart'} click={handleAddBtn} />
      </div>
    </div>
  );
}
