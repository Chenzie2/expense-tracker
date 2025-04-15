import React, { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import initialExpenses from "./data/expenses";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default App;
