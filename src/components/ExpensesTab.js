import React from "react";
import InputCategory from "./InputCategory";
import { useState, useEffect } from "react";

export default function ExpensesTab({
  onInputChange,
  expense,
  values,
  setValues,
}) {
  const [state, setState] = useState("test");
  const test = () => alert(state);

  const collectionDisplay = values.filter((value) => value.type === "expense");

  const onClickAddCategory = () => {
    const parentId = values.length < 1 ? 0 : values.length + 1;
    const newObject = {
      id: parentId,
      type: "expense",
      description: "Expense",
      value: 0,
      inputs: [{ id: parentId + "-" + 1, title: "Gym", value: 20 }],
    };
    let addedData = [...values, newObject];
    setValues(addedData);
  };

  return (
    <div>
      ExpensesTab
      {/* <InputCategory
        onInputChange={onInputChange}
        id="1844"
        type="expense"
        values={values}
        setValues={setValues}
        description={values[1].description}
      /> */}
      {/*  */}
      {/*  */}
      <div>
        {collectionDisplay.map((value) => (
          <div key={value.id}>
            <InputCategory
              onInputChange={onInputChange}
              id={value.id}
              type={value.type}
              remove={test}
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

        {/* <button className="inline m-auto px-2">Add New</button> */}
      </div>
      {/* <div>
        <InputCategory
          onInputChange={onInputChange}
          id={17}
          type={expense}
          remove={test}
          values={values}
          setValues={setValues}
        />
      </div> */}
    </div>
  );
}
