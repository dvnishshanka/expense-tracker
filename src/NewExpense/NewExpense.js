import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import Card from "../components/UI/Card";

const NewExpense = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const saveExpenseDataHandler = (expenseData) => {
    props.onAddExpenseData(expenseData);
    setShowAddExpense(false);
  };

  const showExpenseHandler = () => {
    setShowAddExpense(true);
  };

  const hideExpenseHandler = () => {
    setShowAddExpense(false);
  };

  return (
    <Card className="new-expense">
      {showAddExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelAddExpense={hideExpenseHandler}
        />
      ) : (
        <button onClick={showExpenseHandler}>Add Expense</button>
      )}
    </Card>
  );
};
export default NewExpense;
