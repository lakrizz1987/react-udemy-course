import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/uii-slice'

const CartButton = (props) => {

  const dispatch = useDispatch();

  function showCartHandler() {
    dispatch(uiActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
