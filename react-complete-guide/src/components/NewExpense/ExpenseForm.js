import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const [showForm, setShowForm] = useState(false);

    if (!showForm)
        return (
            <div className="new-expense__actions" style={{textAlign: 'center'}}>
                <button type="button" onClick={() => setShowForm(true)}>Add New Expense</button>
            </div>
        );

    const inputChangeHandler = (ev) => {
        setExpense((prevState) => {
            prevState[ev.target.name] = ev.target.value;
            return {...prevState};
        });
    };

    const submitHandler = (ev) => {
        ev.preventDefault();

        const expenseData = {
            ...expense,
            amount: +expense.amount,
            date: new Date(expense.date)
        }

        props.onSave(expenseData);

        setShowForm(false);

        setExpense({
            title: '',
            amount: '',
            date: ''
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={expense.title} name="title" onChange={inputChangeHandler}
                           required="required"/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={expense.amount} name="amount" min="0.01" step="0.01"
                           onChange={inputChangeHandler} required="required"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expense.date} name="date" min="2019-01-01" max="2022-12-31"
                           onChange={inputChangeHandler} required="required"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;