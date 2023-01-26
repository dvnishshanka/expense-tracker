import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e5",
    title: "Milk",
    amount: 2,
    date: new Date(2023, 1, 12),
  },
  {
    id: "e6",
    title: "Car Service",
    amount: 470,
    date: new Date(2022, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseData = (expenseData) => {
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div className="App">
      <h2>Expense Tracker 🚀🚀 </h2>
      <NewExpense onAddExpenseData={addExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
