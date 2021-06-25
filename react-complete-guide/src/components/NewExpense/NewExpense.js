import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSave={props.onSave}/>
    </div>
  );
};

export default NewExpense;
