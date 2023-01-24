import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./../UI/Card";
import { React, useState } from "react";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2 className="expense-title">{props.title}</h2>
      <div className="expense-amount">$ {props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
