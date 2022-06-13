import { useState, useEffect } from "react";
import Chart from "./Chart";

export default function ReportsTab({ values, budgetSum }) {
  const [expenses, setExpenses] = useState([]);
  const [expensesLabelTitle, setExpensesLabelTitle] = useState([]);
  const [incomes, setIncomes] = useState([]);
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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",

          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
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
