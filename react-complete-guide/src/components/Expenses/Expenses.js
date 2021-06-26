import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filter, setFilter] = useState("");
    const filteredExpenses =props.items
        .filter((e) => (filter !== '' && filter === e.date.getFullYear() + '') || filter === '');

    const filterChangeHandler = (value) => {
        setFilter(value);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filter} onChange={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList filter={filter} items={filteredExpenses}/>
        </Card>
    );
};

export default Expenses;
