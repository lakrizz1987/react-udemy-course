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

    const fiteredByYearData = props.items.filter(x => {
        return x.date.getFullYear().toString() === selectedYear;
    })


    let renderingContent = <p style={{ 'color': 'white' }}>No expenses for this preiod!</p>

    if (fiteredByYearData.length > 0) {
        renderingContent = fiteredByYearData.map(expense => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYear={changeHandlerExpense} />
                {renderingContent}
            </Card>
        </div>
    );
}

export default Expenses;
