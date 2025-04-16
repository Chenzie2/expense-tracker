import React, { useState } from 'react';
import './App.css'; 
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import initialExpenses from './data/expenses';
import { v4 as uuidv4 } from 'uuid'; 

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  function handleAddExpense(newExpense) {
    const withId = { ...newExpense, id: uuidv4() }; 
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
    <>
      <header style={{ textAlign: 'center', margin: '2rem auto' }}>
        <h1 style={{ color: '#a56cc1', fontSize: '2.5rem' }}>Expense Tracker</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', color: '#444' }}>
          Track your weekly expenses by adding and organizing your purchases by category.
          Use the search and sort options to quickly find and manage your spending.
        </p>
      </header>

      <div className="app-container">
        {/* LEFT: Form */}
        <div className="form-container">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        {/* RIGHT: Search, Sort, Table */}
        <div className="table-container">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

          <div className="sort-controls" style={{ marginBottom: "1rem" }}>
            <label htmlFor="sort">Sort: </label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="description">By Description</option>
              <option value="category">By Category</option>
            </select>
          </div>

          <ExpenseTable 
            expenses={filteredExpenses} 
            onDelete={handleDeleteExpense} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
