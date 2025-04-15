import React, { useState } from 'react'; 
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import initialExpenses from './data/expenses'; 

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(idToDelete) {
    setExpenses(expenses.filter(expense => expense.id !== idToDelete));
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable 
        expenses={filteredExpenses} 
        onDelete={handleDeleteExpense} 
      />
    </div>
  );
}

export default App;
