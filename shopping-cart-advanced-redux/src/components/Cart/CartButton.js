import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  
  const toggelCardHandler = () => {
    dispatch(uiActions.toggle());
  };

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={toggelCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
