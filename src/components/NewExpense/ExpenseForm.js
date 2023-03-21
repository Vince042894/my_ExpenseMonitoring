import React, { useState } from "react";
import "./styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__description">
          <div>
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="text"
              onChange={amountChangeHandler}
              value={enteredAmount}
              min="0.01"
              step="0.01"
            />
          </div>
        </div>

        <div className="new-expense__date">
          <div className="">
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
              min="2023-01-01"
              max="2026-12-31"
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit"> Add Expenses </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
