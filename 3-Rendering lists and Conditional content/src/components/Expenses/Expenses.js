import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    function changeHandlerExpense(selectedYear) {
        setSelectedYear(selectedYear)
    }

    const fiteredByYearData = props.items.filter(x => {
        return x.date.getFullYear().toString() === selectedYear;
    })




    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeYear={changeHandlerExpense} />
                <ExpenseChart expenses={fiteredByYearData}/>
                <ExpenseList item={fiteredByYearData} />
            </Card>
        </div>
    );
}

export default Expenses;
