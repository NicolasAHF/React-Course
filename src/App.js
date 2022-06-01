import Expense from "./components/Expenses/Expense";

const expenses = [
  {
    id:'e1',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id:'e2',
    title: 'Cositas',
    amount: 450000,
    date: new Date(2022, 8, 22),
  }
]


function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
