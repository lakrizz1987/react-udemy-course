import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItemns = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItemns,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCardHandler = (item) => {
        dispatchCartAction({ type: 'ADD', payload: item })
    };

    const removeItemFromCardHandler = (id) => { };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCardHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;