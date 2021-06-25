import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const items = [];
  const [filter, setFilter] = useState("");

  for (const item of props.items) {
    if (filter !== "") {
      if (filter === item.date.getFullYear() + '') {
        items.push(
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      }
    } else {
      items.push(
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      );
    }
  }

  const filterChangeHandler = (value) => {
    setFilter(value);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChange={filterChangeHandler}/>
      {items}
    </Card>
  );
};

export default Expenses;
