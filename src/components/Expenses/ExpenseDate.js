import "./ExpenseDate.css";
import Card from "./../UI/Card";

const ExpenseDate = (props) => {
  const month = Intl.DateTimeFormat("en-US", { month: "long" }).format(
    props.date
  );
  const year = Intl.DateTimeFormat("en-US", { year: "numeric" }).format(
    props.date
  );
  const date = Intl.DateTimeFormat("en-US", { day: "numeric" }).format(
    props.date
  );

  return (
    <Card className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-date">{date}</div>
    </Card>
  );
};
export default ExpenseDate;
