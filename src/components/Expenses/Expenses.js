import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSeletectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const filterChangeHandler = (selectedYearByUser) => {
    setSeletectedYear(selectedYearByUser);
  };

  const filterExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onChangeYear={filterChangeHandler}
          year={selectedYear}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList filterExpenses={filterExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
