import React from "react";
import ExpenseTable from "./components/ExpenseTable";
import expenses from "./data/expenses";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default App;
