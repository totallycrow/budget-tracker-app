import { useState, useEffect } from "react";
import Chart from "./Chart";

export default function ReportsTab({ values, budgetSum }) {
  const [expenses, setExpenses] = useState([]);
  const [expensesLabelTitle, setExpensesLabelTitle] = useState([]);
  const [budget, SetBudget] = useState(budgetSum);

  useEffect(() => {
    SetBudget(budgetSum);
  }, [budgetSum]);

  let dataExpenses = {
    labels: expensesLabelTitle,
    datasets: [
      {
        label: "Expenses Breakdown",
        data: expenses,
        backgroundColor: [
          "rgba(255, 46, 46, 0.34)",
          "rgba(255, 172, 46, 0.34)",
          // "rgba(255, 251, 46, 0.54)",
          "rgba(46, 255, 59, 0.34)",
          "rgba(46, 255, 216, 0.5)",
          "rgba(46, 159, 255, 0.5)",
          "rgba(72, 46, 255, 0.5)",
          "rgba(255, 46, 159, 0.5)",
          "rgba(206, 198, 0, 0.62)",
          "rgba(18, 141, 0, 0.42)",
          "rgba(0, 141, 132, 0.62)",
          "rgba(0, 91, 141, 0.62)",
          "rgba(94, 0, 141, 0.62)",
          // "rgba(255, 99, 132, 0.2)",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(225, 46, 255, 0.22)",
          // "rgba(155, 46, 255, 0.22)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
          // "rgba(136, 1, 1, 0.8)",
          // "rgba(255, 220, 46, 0.8)",
        ],
        borderColor: [
          "rgba(255, 46, 46, 1)",
          "rgba(255, 172, 46, 1)",
          // "rgba(255, 251, 46, 1)",
          "rgba(46, 255, 59, 1)",
          "rgba(46, 255, 216, 1)",
          "rgba(46, 159, 255, 1)",
          "rgba(72, 46, 255, 1)",
          "rgba(255, 46, 159, 1)",
          "rgba(206, 198, 0, 1)",
          "rgba(18, 141, 0, 1)",
          "rgba(0, 141, 132, 1)",
          "rgba(0, 91, 141, 1)",
          "rgba(94, 0, 141, 1)",
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(225, 46, 255, 0.22)",
          // "rgba(155, 46, 255, 0.22)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
          // "rgba(255, 159, 64, 0.2)",
          // "rgba(136, 1, 1, 0.8)",
          // "rgba(255, 220, 46, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let dataBudget = {
    labels: ["Income", "Expenses", "Remaining"],
    datasets: [
      {
        label: "Income vs Expenses",
        data: [
          budget.incomes,
          budget.expenses,
          budget.incomes - budget.expenses,
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(136, 1, 1, 0.8)",
          "rgba(255, 220, 46, 0.8)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(136, 1, 1, 0.8)",
          "rgba(136, 1, 1, 0.8)",
          "rgba(136, 1, 1, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    let expensesArray = [];
    let incomesArray = [];
    let expensesTitleArray = [];
    values.forEach((element) => {
      if (element.type === "expense") {
        element.inputs.forEach((subinput) => {
          expensesArray.push(subinput.value);
          expensesTitleArray.push(subinput.title);
        });
      } else if (element.type === "income") {
        element.inputs.forEach((subinput) => {
          //   expensesArray.push(subinput.value);
          incomesArray.push(subinput.value);
          expensesTitleArray.push(subinput.title);
        });
        // incomesSum = incomesSum + element.value;
      }
    });
    // return parseInt(sum);

    // setIncomes(calculateSums("income"));
    setExpenses(expensesArray);
    setExpensesLabelTitle(expensesTitleArray);
    console.log(budget);

    // data.datasets[0].data = expenses;
  }, [values]);

  return (
    <div>
      ReportsTab
      <div className="w-full">
        <div className="w-72 m-auto mb-10">
          <h2 className="text-center p-4 m-2">
            {dataExpenses.datasets[0].label}
          </h2>
          <Chart values={values} data={dataExpenses} />
        </div>
        <div className="w-72 m-auto mb-10">
          <h2 className="text-center p-4 m-2">
            {dataBudget.datasets[0].label}
          </h2>
          <Chart values={values} data={dataBudget} />
        </div>
      </div>
    </div>
  );
}
