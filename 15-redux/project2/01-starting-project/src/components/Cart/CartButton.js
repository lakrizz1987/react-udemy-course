import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/uii-slice'

const CartButton = (props) => {
  const cartSliceTotalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  function showCartHandler() {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartSliceTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
