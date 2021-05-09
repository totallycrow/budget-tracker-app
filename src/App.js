import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";

const values = "Monthly Wages";

function App() {
  const [total, setTotal] = useState(0);

  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);

  const [inputIncomes, setInputIncomes] = useState([0, 0, 0]);
  const [inputExpenses, setInputExpenses] = useState([0, 0, 0]);

  const income = "income";
  const expense = "expense";

  // Listen for income inputs change
  useEffect(() => {
    setTotal(
      parseInt(inputIncomes[0]) +
        parseInt(inputIncomes[1]) -
        parseInt(inputIncomes[2])
    );
    setIncomes(inputIncomes[0] + inputIncomes[1]);
    setExpenses(parseInt(inputExpenses[0]) + parseInt(inputExpenses[1]));
  }, [inputIncomes, inputExpenses]);

  // Listen for income/expense change to re-render totals
  useEffect(() => {
    setTotal(incomes);
  }, [incomes, expenses]);

  const onInputChange = (id, value, type) => {
    if (type === "income") {
      const incomesInput = inputIncomes.slice();

      value === ""
        ? (incomesInput[id - 1] = parseInt(0))
        : (incomesInput[id - 1] = parseInt(value));

      console.log("initial array" + inputIncomes[0] + inputIncomes[1]);

      console.log(id);
      console.log(value);

      console.log("copied array 1 = " + incomesInput[0]);
      console.log("copied array 2 = " + incomesInput[1]);

      console.log(inputIncomes[0]);
      console.log(inputIncomes[1]);

      console.log(incomesInput);
      setInputIncomes(incomesInput);
    } else {
      const exp = inputExpenses.slice();

      value === ""
        ? (exp[id - 1] = parseInt(0))
        : (exp[id - 1] = parseInt(value));

      console.log("initial array" + exp[0] + exp[1] + exp[2] + exp[3]);
      console.log(exp);

      console.log(id);
      console.log(value);

      console.log(exp[0]);
      console.log(exp[1]);

      setInputExpenses(exp);
    }
  };

  return (
    <div className="content-wrapper h-screen w-screen">
      <h1 className="px-12 py-4">Budget Tracker App</h1>
      <div className="container mx-auto py-10 px-8 border">
        <div>
          <div className="main-header flex justify-center border-b">
            <button>Click</button>
            <button>Click</button>
            <button>Click</button>
            <button>Click</button>
          </div>
        </div>
        <div className="app-body">
          <h2>Income {incomes}</h2> Expenses: {expenses}
          <h3>TOTAL: {total}</h3>
          <ItemList onInputChange={onInputChange} id={1} type={income} />
          <ItemList onInputChange={onInputChange} id={2} type={income} />
        </div>
        <p>ID 2 value {inputIncomes[1]}</p>
        <ItemList onInputChange={onInputChange} id={3} type={income} />
      </div>
    </div>
  );
}

export default App;
