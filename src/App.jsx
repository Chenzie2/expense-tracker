import React, { useState } from 'react'; 
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import initialExpenses from './data/expenses'; 

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  function handleAddExpense(newExpense) {
    const newId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
    const withId = { ...newExpense, id: newId, date: new Date().toLocaleDateString() };
    setExpenses([...expenses, withId]);
  }

  function handleDeleteExpense(idToDelete) {
    setExpenses(expenses.filter(expense => expense.id !== idToDelete));
  }

  function handleSortChange(e) {
    setSortOption(e.target.value);
  }

  let filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  if (sortOption === "description") {
    filteredExpenses = [...filteredExpenses].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortOption === "category") {
    filteredExpenses = [...filteredExpenses].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      
      <div className="sort-controls">
        <label htmlFor="sort">Sort: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="description">By Description</option>
          <option value="category">By Category</option>
        </select>
      </div>

      <div className="main-content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseTable 
          expenses={filteredExpenses} 
          onDelete={handleDeleteExpense} 
        />
      </div>
    </div>
  );
}

export default App;
