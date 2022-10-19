import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/uii-slice';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);
  const notificatinStatus = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendDataToServer = async () => {

      dispatch(uiActions.setNotification({ status: 'pending', title: 'Sending...', message: 'Sending cart data!' }))
      const response = await fetch('https://books-3d4e1-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) })

      if (!response.ok) {
        throw new Error('Sending Failed!')
      }

      dispatch(uiActions.setNotification({ status: 'success', title: 'Success!', message: 'Sending cart data successfuly!' }))

    }

    if(isInitial){
      isInitial = false;
      return;
    };

    sendDataToServer().catch(err => {
      dispatch(uiActions.setNotification({ status: 'error', title: 'Error!', message: 'Sending cart data failed!' }))

    })


  }, [cart, dispatch]);

  return (
    <Fragment>
      {notificatinStatus && <Notification 
      status={notificatinStatus.status} 
      title={notificatinStatus.title} 
      message={notificatinStatus.message}
      />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
