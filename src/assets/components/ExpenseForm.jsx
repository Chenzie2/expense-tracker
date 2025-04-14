import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !amount || !category) return;

    const newExpense = {
      id: Date.now(), // unique enough for now
      description,
      amount: parseFloat(amount),
      category
    };

    onAddExpense(newExpense);

    // reset form
    setDescription("");
    setAmount("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
