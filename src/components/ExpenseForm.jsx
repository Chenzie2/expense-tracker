import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: crypto.randomUUID(),
    };
    onAddExpense(newExpense);
    setFormData({ description: "", amount: "", category: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        name="amount"
        placeholder="Amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
