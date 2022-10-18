import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const item = useSelector(state => state.cart);

  return (

    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {item.items.map(x => <CartItem
          key={x.id}
          item={{ title: x.name, quantity: x.quantity, total: x.totalPrice, price: x.price, id: x.id }}
        />)}
      </ul>
    </Card>
  );
};

export default Cart;
