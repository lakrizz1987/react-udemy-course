import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleOnChangeHandler(e){
        setEnteredTitle(e.target.value);
    }

    function amountOnChangeHandler(e){
        setEnteredAmount(e.target.value)
    }

    function dateOnChangeHandler(e){
        setEnteredDate(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveEnteredData(expenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
       
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleOnChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'  value={enteredAmount} min='0.01' step='0.01' onChange={amountOnChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'  value={enteredDate} onChange={dateOnChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;