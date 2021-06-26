import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expenses = props.items
        .map((e) => (
            <ExpenseItem
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
            />
        ));

    if (expenses.length === 0)
        return <h2 className="expenses-list__fallback">No expenses.</h2>;

    return (
        <ul className="expenses-list">
            {expenses}
        </ul>
    );
}

export default ExpensesList;