import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    function saveExpenseDataHandler(data){
        const expenseData = {
            ...data,
            id:Math.random().toString()
        };
        props.onSaveExpenseData(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveEnteredData={saveExpenseDataHandler}/>
        </div>
    );
    
};

export default NewExpense;