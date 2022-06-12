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
        {values
          .filter((value) => value.type === "expense")
          .map((value) => (
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
              />
            </div>
          ))}
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
