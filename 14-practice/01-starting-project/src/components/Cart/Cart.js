import { Fragment, useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isChekout, setIsCheckout] = useState(false);
  const [isSending,setIsSending] = useState(false);
  const [isSucsess,setIsSucsess] = useState(false)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const onChechoutSumbit = (userData) => {
    const data = {
      user: userData,
      purchase: cartCtx.items
    }

    fetch('https://meals-71a53-default-rtdb.firebaseio.com/store.json', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => {
        setIsSending(true)
        setIsSucsess(true)
        cartCtx.clearHandler()
        return res.json()
      })
      .catch(err => alert(err))

  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}

        />
      ))}
    </ul>
  );

  function confirmHandler() {
    setIsCheckout(true)
  }

  const modalButtons = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={confirmHandler}>Order</button>}
    </div>
  )

  const modalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isChekout && <Checkout onCancel={props.onClose} onChechoutSumbit={onChechoutSumbit} />}
      {!isChekout && modalButtons}
    </Fragment>
  )

  const modalContentAfterOrder = (
    <Fragment>
      <p>Order was send! Thank you!</p>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </Fragment>
  )

  

  return (
    <Modal onClose={props.onClose}>
      {!isSending && modalContent}
      {isSucsess && modalContentAfterOrder}
    </Modal>
  );
};

export default Cart;
