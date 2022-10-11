import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const inputIsValid = (value) => value.trim() !== '';
const postalIsValid = (value) => value.length === 5

const Checkout = (props) => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        stret: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = inputIsValid(enteredName);
        const enteredStreetIsValid = inputIsValid(enteredStreet);
        const enteredCityIsValid = inputIsValid(enteredCity);
        const enteredPostalCodeIsValid = postalIsValid(enteredPostalCode);

        setFormValidity({
            name: enteredNameIsValid,
            stret: enteredStreetIsValid,
            postal: enteredPostalCodeIsValid,
            city: enteredCityIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid;

        if (!formIsValid) {
            return
        }

        props.onChechoutSumbit({
            name: enteredName,
            stret: enteredStreet,
            postal: enteredPostalCode,
            city: enteredCity
        })
    };

    const nameClasses = formValidity.name ? classes.control : `${classes.control} ${classes.invalid}`
    const streetClasses = formValidity.stret ? classes.control : `${classes.control} ${classes.invalid}`
    const postalClasses = formValidity.postal ? classes.control : `${classes.control} ${classes.invalid}`
    const cityClasses = formValidity.city ? classes.control : `${classes.control} ${classes.invalid}`

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClasses}>
                <label htmlFor='name' >Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formValidity.name && <p style={{ color: 'red' }}>Please eneter correct name!</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formValidity.stret && <p style={{ color: 'red' }}>Please eneter correct street!</p>}
            </div>
            <div className={postalClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef} />
                {!formValidity.postal && <p style={{ color: 'red' }}>Please eneter correct postal code!</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formValidity.city && <p style={{ color: 'red' }}>Please eneter correct city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;