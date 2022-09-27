import { useReducer } from "react"

function reducer(state, action) {

    if (action.type === 'increment') {
        console.log(action.payload)
        return { value: action.payload + 1 }

    } else if (action.type === 'decrement') {
        return { value: state.value - 1 }
    };

}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { value: 0 })

    function increment() {
        dispatch({ type: 'increment', payload: state.value })
    }

    function decrement() {
        dispatch({ type: 'decrement' })
    }

    return (
        <>
            <button onClick={increment}>+</button>
            <span>{state.value}</span>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter;