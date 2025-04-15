import React from "react";

function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount (KES)</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>
              {new Intl.NumberFormat("en-KE", {
                style: "currency",
                currency: "KES",
              }).format(expense.amount)}
            </td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
