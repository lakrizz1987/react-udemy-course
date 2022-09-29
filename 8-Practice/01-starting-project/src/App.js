import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
	const [cartShow, setCartShow] = useState(false);

	function showCartHandler() {
		setCartShow(true)
	}

	function hideCartHandler() {
		setCartShow(false)
	}

	return (
		<Fragment>
			{cartShow ? <Cart onClose={hideCartHandler} /> : ''}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
