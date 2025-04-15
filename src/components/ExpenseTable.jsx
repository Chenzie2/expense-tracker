import React from "react";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (KES)</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={expense.id}> {/* Changed from index to expense.id for better React reconciliation */}
            <td>{expense.description}</td>
            <td>{expense.amount.toLocaleString()}</td> {/* Added toLocaleString for better number formatting */}
            <td>{expense.category}</td>
            <td>
              <button 
                onClick={() => onDelete(index)}
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