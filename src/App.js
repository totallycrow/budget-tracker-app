import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";
import initialArray from "./data/initialArray";
import IncomeTab from "./components/IncomeTab";
import HousingExpenses from "./components/HousingExpenses";
import useLocalStorage from "./hooks/useLocalStorage";
import TransportationExpenses from "./components/TransportationExpenses";
import FoodExpenses from "./components/FoodExpenses";
import SavingsExpenses from "./components/SavingsExpenses";

const values = "Monthly Wages";

function App() {
  // State of total
  const [total, setTotal] = useLocalStorage("total", 0);

  // State of sums of inputs
  const [expenses, setExpenses] = useLocalStorage("expenses", 0);
  const [incomes, setIncomes] = useLocalStorage("incomes", 0);

  // State of Inputs
  const [inputIncomes, setInputIncomes] = useLocalStorage(
    "inputIncomes",
    initialArray
  );

  const [inputExpenses, setInputExpenses] = useState([0, 0]);

  // State of Current Page
  const [page, setPage] = useState("income");

  const income = "income";
  const expense = "expense";

  // Listen for income inputs change
  // Update Income and Expenses labels
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

  // Listen for incomes and expenses totals change and update total sum
  useEffect(() => {
    setTotal(incomes - expenses);
  }, [incomes, expenses]);

  // ONINPUTCHANGE
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
        <div className="w-4/5 mx-auto">
          <div className="main-header flex text-xs md:text-base justify-around  border-b ">
            <button classname="" onClick={() => setPage("income")}>
              Income
            </button>
            <button onClick={() => setPage("housing-expenses")}>
              Housing Expenses
            </button>
            <button onClick={() => setPage("transportation-expenses")}>
              Transportation
            </button>
            <button onClick={() => setPage("food-expenses")}>
              Food & Personal
            </button>
            <button onClick={() => setPage("savings")}>Savings</button>
          </div>
        </div>
        <div className="app-body">
          <h2>Income {incomes}</h2> Expenses: {expenses}
          <h3>TOTAL: {total}</h3>
          <div className="mx-auto py-2 px-4 mb-5 border-b w-4/5"></div>
          <div className={page !== "income" ? "hidden" : ""}>
            <IncomeTab
              onInputChange={onInputChange}
              income={income}
              expense={expense}
              fields={2}
            />
          </div>
          <div className={page !== "housing-expenses" ? "hidden" : ""}>
            <HousingExpenses onInputChange={onInputChange} expense={expense} />
          </div>
          <div className={page !== "transportation-expenses" ? "hidden" : ""}>
            <TransportationExpenses
              onInputChange={onInputChange}
              expense={expense}
            />
          </div>
          <div className={page !== "food-expenses" ? "hidden" : ""}>
            <FoodExpenses onInputChange={onInputChange} expense={expense} />
          </div>
          <div className={page !== "savings" ? "hidden" : ""}>
            <SavingsExpenses onInputChange={onInputChange} expense={expense} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
