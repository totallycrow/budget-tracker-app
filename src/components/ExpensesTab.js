import React from "react";
import InputCategory from "./InputCategory";

export default function ExpensesTab({
  onInputChange,
  expense,
  values,
  setValues,
  idGenerator,
}) {
  const collectionDisplay = values.filter((value) => value.type === "expense");

  const onClickAddCategory = () => {
    const parentId = idGenerator();
    const newObject = {
      id: parentId,
      type: "expense",
      description: "Expense",
      value: 0,
      inputs: [{ id: parentId + "-" + 1, title: "Your Expense", value: 20 }],
    };
    let addedData = [...values, newObject];
    setValues(addedData);
  };

  return (
    <div>
      ExpensesTab
      <div>
        {collectionDisplay.map((value) => (
          <div key={value.id}>
            <InputCategory
              onInputChange={onInputChange}
              id={value.id}
              type={value.type}
              values={values}
              setValues={setValues}
              expense={expense}
              description={value.description}
              listItems={value.inputs}
              key={value.id}
              onClickAddCategory={onClickAddCategory}
            />
          </div>
        ))}
      </div>
      <div>
        {collectionDisplay.length < 1 ? (
          <button onClick={onClickAddCategory} className="inline m-auto px-2">
            Add New
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
