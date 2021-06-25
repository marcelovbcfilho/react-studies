import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      key: 0,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      key: 1,
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      key: 2,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      key: 3,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ])

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const newExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      prevExpenses.push({
        ...newExpense,
        id: expenses.length,
      });

      return [...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onSave={newExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
