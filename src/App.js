import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";
import initialArray from "./data/initialArray";
import IncomeTab from "./components/IncomeTab";
import HousingExpenses from "./components/HousingExpenses";

const values = "Monthly Wages";

function App() {
  const [total, setTotal] = useState(0);

  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);

  const [inputIncomes, setInputIncomes] = useState(initialArray);
  const [inputExpenses, setInputExpenses] = useState([0, 0, 0]);

  const [page, setPage] = useState("income");

  const income = "income";
  const expense = "expense";

  // Listen for income inputs change
  useEffect(() => {
    setIncomes(inputIncomes[0].value + inputIncomes[1].value);

    const calculateExpenses = () => {
      let sum = 0;

      inputIncomes.forEach((element) => {
        if (element.type === "expense") {
          sum = sum + element.value;
        }
      });
      return parseInt(sum);
    };

    setExpenses(calculateExpenses());
  }, [inputIncomes, inputExpenses]);

  useEffect(() => {
    setTotal(incomes - expenses);
  }, [incomes, expenses]);

  const onInputChange = (id, value, type, description) => {
    const incomesInput = inputIncomes.slice();

    value === ""
      ? (incomesInput[id - 1].value = parseInt(0))
      : (incomesInput[id - 1].value = parseInt(value));

    incomesInput[id - 1].id = id;

    console.log("initial array" + inputIncomes[0] + inputIncomes[1]);

    console.log(id);
    console.log(value);

    console.log("copied array 1 = " + incomesInput[0]);
    console.log("copied array 2 = " + incomesInput[1]);

    console.log(inputIncomes[0]);
    console.log(inputIncomes[1]);
    console.log(inputIncomes[2]);

    console.log(incomesInput);
    setInputIncomes(incomesInput);
  };

  return (
    <div className="content-wrapper h-screen w-screen">
      <h1 className="px-12 py-4">Budget Tracker App</h1>
      <div className="container mx-auto py-10 px-8 border">
        <div>
          <div className="main-header flex justify-center border-b">
            <button onClick={() => setPage("income")}>Income</button>
            <button onClick={() => setPage("housing-expenses")}>
              Housing Expenses
            </button>
            <button>Click</button>
            <button>Click</button>
          </div>
        </div>
        <div className="app-body">
          <h2>Income {incomes}</h2> Expenses: {expenses}
          <h3>TOTAL: {total}</h3>
          <div className="mx-auto py-2 px-4 mb-5 border-b w-4/5"></div>
          {page === "income" ? (
            <IncomeTab
              onInputChange={onInputChange}
              income={income}
              expense={expense}
            />
          ) : (
            <HousingExpenses
              onInputChange={onInputChange}
              income={income}
              expense={expense}
            />
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
