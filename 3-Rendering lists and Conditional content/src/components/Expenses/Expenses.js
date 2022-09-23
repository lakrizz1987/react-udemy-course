import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  function changeHandlerExpense(selectedYear) {
    setSelectedYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        
        <ExpensesFilter selected={selectedYear} onChangeYear={changeHandlerExpense} />

        {props.items.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)}
       
      </Card>
    </div>
  );
}

export default Expenses;
