import { useState, useEffect } from "react";
import initialArray from "./data/initialArray";
import IncomeTab from "./components/IncomeTab";
import HousingExpenses from "./components/HousingExpenses";
import useLocalStorage from "./hooks/useLocalStorage";
import TransportationExpenses from "./components/TransportationExpenses";
import FoodExpenses from "./components/FoodExpenses";
import SavingsExpenses from "./components/SavingsExpenses";
import ExpensesTab from "./components/ExpensesTab";
import ReportsTab from "./components/ReportsTab";

const button = "px-2";

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

  // const [inputExpenses, setInputExpenses] = useState([0, 0]);

  // State of Current Page
  const [page, setPage] = useState("income");

  const income = "income";
  const expense = "expense";

  ////****/ Listen for income inputs change
  // ** Update Income and Expenses labels
  
  // TODO: Incomes hard-coded to first two values:
  useEffect(() => {
    
    


    const calculateSums = (inputType) => {
      let sum = 0;

      inputIncomes.forEach((element) => {
        if (element.type === "expense" && inputType === "expense") {
          sum = sum + element.value;
        } else if (element.type === "income" && inputType === "income") {
          sum = sum + element.value;}
      });
      return parseInt(sum);
    };
    
    setIncomes(calculateSums("income"));
    setExpenses(calculateSums("expense"));
  }, [inputIncomes]);

  // Listen for incomes and expenses totals change and update total sum
  useEffect(() => {
    setTotal(incomes - expenses);
  }, [incomes, expenses]);

  // OnInputChange definition
  const onInputChange = (id, value) => {
    const incomesInput = inputIncomes.slice();

    value === ""
      ? (incomesInput[id - 1].value = parseInt(0))
      : (incomesInput[id - 1].value = parseInt(value));

    incomesInput[id - 1].id = id;

    setInputIncomes(incomesInput);
  };

  return (
    <div className="content-wrapper h-screen w-screen">
      <h1 className="px-12 py-4">Budget Tracker App</h1>
      <div className="container mx-auto py-10 px-8 border">
        <div className="md:w-4/5 mx-auto">
          <div className="main-header flex text-xs md:text-base md:justify-around  border-b ">
            <button className={button} onClick={() => setPage("income")}>
              Income
            </button>
            <button
              className={button}
              onClick={() => setPage("expenses")}
            >
              Expenses
            </button>
            <button
              className={button}
              onClick={() => setPage("reports")}
            >
              Reports
            </button>
            <button className={button} onClick={() => setPage("food-expenses")}>
              Food & Personal
            </button>
            <button className={button} onClick={() => setPage("savings")}>
              Savings
            </button>
          </div>
        </div>
        <div className="app-body my-4">
          <div className="flex justify-around md:block">
            <div>
              <h3>
                Income: <span className="text-green-600">{incomes}</span> £
              </h3>
              <h3>
                Expenses: <span className="text-red-600">{expenses}</span> £
              </h3>
            </div>
            <div className="py-2">
              <h3>
                REMAINING:{" "}
                <span
                  className={
                    total > 0
                      ? "text-green-400"
                      : total < 0
                      ? "text-red-600"
                      : ""
                  }
                >
                  {total}
                </span>{" "}
                £
              </h3>
            </div>
          </div>

          <div className="mx-auto py-2 px-4 mb-5 border-b w-4/5"></div>
          <div className={page !== "income" ? "hidden" : ""}>
            <IncomeTab
              onInputChange={onInputChange}
              income={income}
              expense={expense}
              fields={2}
            />
          </div>
          <div className={page !== "expenses" ? "hidden" : ""}>
            <ExpensesTab onInputChange={onInputChange} expense={expense} />
          </div>
          <div className={page !== "reports" ? "hidden" : ""}>
            <ReportsTab
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
