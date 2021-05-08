import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";

const values = "Monthly Wages";

function App() {
  const [incomeValue, setIncomeValue] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [test, setTest] = useState(0);
  let result = 0;

  const [inputIncomes, setInputIncomes] = useState([0, 0]);

  const onInputChange = (id, value) => {
    value === "" ? (inputIncomes[id - 1] = 0) : (inputIncomes[id - 1] = value);

    console.log("initial array" + inputIncomes[0] + inputIncomes[1]);

    console.log(id);
    console.log(value);
    console.log(inputIncomes[0]);
    console.log(inputIncomes[1]);

    setTest(parseInt(inputIncomes[0]) + parseInt(inputIncomes[1]));
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
          <h2>Income {test}</h2>
          <ItemList onInputChange={onInputChange} id={1} />

          <ItemList onInputChange={onInputChange} id={2} />
        </div>
        <p>
          ID 2 value {inputIncomes[0]}// {result}
        </p>
      </div>
    </div>
  );
}

export default App;
