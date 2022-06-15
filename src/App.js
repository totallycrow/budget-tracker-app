import { useState, useEffect } from "react";
import initialArray from "./data/initialArray";
import IncomeTab from "./components/IncomeTab";
import useLocalStorage from "./hooks/useLocalStorage";
import ExpensesTab from "./components/ExpensesTab";
import ReportsTab from "./components/ReportsTab";
import budget from "./data/budget";

const button = "px-2";

function App() {
  const [budgetSum, setBudgetSum] = useLocalStorage("budgetSum", budget[0]);

  // State of Inputs
  const [inputIncomes, setInputIncomes] = useLocalStorage(
    "inputIncomes",
    initialArray
  );

  const reset = () => {
    const state = [
      {
        id: 0,
        type: "expense",
        description: "Bills",
        value: 0,
        inputs: [
          { id: "0-1", title: "Gym", value: 20 },
          { id: "0-2", title: "Travel", value: 150 },
          { id: "0-3", title: "Phone", value: 66 },
        ],
      },
      {
        id: 1,
        type: "expense",
        description: "Entertainment",
        value: 0,
        inputs: [
          { id: "1-1", title: "Netflix", value: 20 },
          { id: "1-2", title: "Games", value: 150 },
        ],
      },
      {
        id: 2,
        type: "income",
        description: "Main Income",
        value: 0,
        inputs: [
          { id: "2-1", title: "Work", value: 1500 },
          { id: "2-2", title: "Self-Employment", value: 500 },
        ],
      },
    ];
    state[0].id = idGenerator();
    localStorage.setItem(`inputIncomes`, state);    
    setInputIncomes(state);
  };

  const idGenerator = () => {
    let numberId =
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36);    
    return numberId;
  };

  // State of Current Page
  const [page, setPage] = useState("income");
  const income = "income";
  const expense = "expense";

  ////****/ Listen for income inputs change
  // ** Update Income and Expenses labels

  useEffect(() => {
    const calculateSums = () => {
      
      let incomesSum = 0;
      let expensesSum = 0;

      inputIncomes.forEach((element) => {
        if (element.type === "expense") {
          element.inputs.forEach((subinput) => {
            expensesSum = expensesSum + subinput.value;
          });
        } else if (element.type === "income") {
          element.inputs.forEach((subinput) => {
            incomesSum = incomesSum + subinput.value;
          });          
        }
      });      

      let budgetValues = {        
        incomes: incomesSum,
        expenses: expensesSum,
      };
      setBudgetSum(budgetValues);
    };

    calculateSums();
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [inputIncomes]);

  //************************************************ */
  // OnInputChange definition
  const onInputChange = (id, value) => {
    const incomesInput = inputIncomes.slice();

    value === ""
      ? (incomesInput[id - 1].value = parseInt(0))
      : (incomesInput[id - 1].value = parseInt(value));

    incomesInput[id - 1].id = id;

    setInputIncomes(incomesInput);
  };
  //************************************************ */

  return (
    <div className="content-wrapper h-screen w-screen">
      <h1 className="px-12 py-4">Budget Tracker App</h1>
      <div className="container mx-auto py-10 px-8 border">
        <div className="md:w-4/5 mx-auto">
          <div className="main-header flex text-xs md:text-base md:justify-around  border-b ">
            <button className={button} onClick={() => setPage("income")}>
              Income
            </button>
            <button className={button} onClick={() => setPage("expenses")}>
              Expenses
            </button>
            <button className={button} onClick={() => setPage("reports")}>
              Reports
            </button>
          </div>
        </div>
        <div className="app-body my-4">
          <div className="flex justify-around md:block">
            <div>
              <h3>
                Income:{" "}
                <span className="text-green-600">{budgetSum.incomes}</span> £
              </h3>
              <h3>
                Expenses:{" "}
                <span className="text-red-600">{budgetSum.expenses}</span> £
              </h3>
            </div>
            <div className="py-2">
              <h3>
                REMAINING:{" "}
                <span
                  className={
                    budgetSum.incomes - budgetSum.expenses > 0
                      ? "text-green-400"
                      : budgetSum.incomes - budgetSum.expenses < 0
                      ? "text-red-600"
                      : ""
                  }
                >
                  {budgetSum.incomes - budgetSum.expenses}
                </span>{" "}
                £
              </h3>
            </div>
            <button onClick={reset}>RESET</button>
          </div>

          <div className="mx-auto py-2 px-4 mb-5 border-b w-4/5"></div>
          <div className={page !== "income" ? "hidden" : ""}>
            <IncomeTab
              onInputChange={onInputChange}
              income={income}
              expense={expense}
              values={inputIncomes}
              setValues={setInputIncomes}
              idGenerator={idGenerator}
            />
          </div>
          <div className={page !== "expenses" ? "hidden" : ""}>
            <ExpensesTab
              onInputChange={onInputChange}
              expense={expense}
              values={inputIncomes}
              setValues={setInputIncomes}
              idGenerator={idGenerator}
            />
          </div>
          <div className={page !== "reports" ? "hidden" : ""}>
            <ReportsTab
              onInputChange={onInputChange}
              expense={expense}
              values={inputIncomes}
              budgetSum={budgetSum}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
