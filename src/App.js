import ItemList from "./components/ItemList";
import { useState, useEffect } from "react";

const values = "Monthly Wages";

function App() {
  const [test, setTest] = useState(0);
  const [inputIncomes, setInputIncomes] = useState([0, 0]);

  // Listen for income inputs change
  useEffect(() => {
    setTest(parseInt(inputIncomes[0]) + parseInt(inputIncomes[1]));
  }, [inputIncomes]);

  const onInputChange = (id, value) => {
    let processedValue;
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
        <p>ID 2 value {inputIncomes[1]}</p>
      </div>
    </div>
  );
}

export default App;
