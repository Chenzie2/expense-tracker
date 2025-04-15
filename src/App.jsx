function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
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
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}
function handleDeleteExpense(indexToDelete) {
  const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
  setExpenses(updatedExpenses);
}


export default App;