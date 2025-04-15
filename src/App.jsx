import React, { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import initialExpenses from "./data/expenses";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [search, setSearch] = useState("");

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "50%" }}
      />

      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
