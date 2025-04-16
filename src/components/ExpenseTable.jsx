import React from "react";
function ExpenseTable({ expenses, onDelete }) {
  return (
    <table className="expense-table"> 
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (KES)</th>
          <th>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td className="amount-cell"> 
              {expense.amount.toLocaleString()}
            </td>
            <td className="category-cell"> 
              <span className={expense.category}> 
                {expense.category}
              </span>
            </td>
            <td>{expense.date}</td>
            <td>
              <button 
                onClick={() => onDelete(expense.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ExpenseTable;
