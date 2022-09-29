import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartShow, setCartShow] = useState(false);

	function showCartHandler() {
		setCartShow(true)
	}

	function hideCartHandler() {
		setCartShow(false)
	}

	return (
		<CartProvider>
			{cartShow ? <Cart onClose={hideCartHandler} /> : ''}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
