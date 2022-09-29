import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

function MealItemForm(props) {
    const [isInvalidEnteredAmount, setIsInvalidEnteredAmount] = useState(false)
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmound = Number(inputRef.current.value);

        if (enteredAmound < 1 || enteredAmound > 5) {
            setIsInvalidEnteredAmount(true);
            return;
        }

        props.onAddToCart(enteredAmound)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input id={props.id} label='Amount' ref={inputRef} input={{
                type: 'number' + props.id,
                id: 'amount',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
            {isInvalidEnteredAmount && <p>Please enter valid amount! (1-5)</p>}
        </form>
    )
}

export default MealItemForm;