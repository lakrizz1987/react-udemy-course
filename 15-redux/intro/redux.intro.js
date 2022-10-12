const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latesState = store.getState();
    console.log(latesState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' })