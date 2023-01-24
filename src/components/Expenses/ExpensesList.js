import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filterExpenses.length === 0) {
    return <h3 className="no-expenses">No Expenses found.</h3>;
  } else {
    return (
      <ul className="expense-list">
        {props.filterExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
