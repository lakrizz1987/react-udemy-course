import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [isShow, setIsShow] = useState(false);

    function saveExpenseDataHandler(data) {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onSaveExpenseData(expenseData);
        setIsShow(false)
    }

    return (
        <div className="new-expense">
            {isShow ? <ExpenseForm setView={setIsShow} onSaveEnteredData={saveExpenseDataHandler} /> :  <button onClick={() => setIsShow(true)}>Add Expense</button>}
           
            
        </div>
    );

};

export default NewExpense;