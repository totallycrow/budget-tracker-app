import React from "react";
import InputCategory from "./InputCategory";
import { useState, useEffect } from "react";

export default function ExpensesTab({
  onInputChange,
  expense,
  values,
  setValues,
}) {
  const [state, setState] = useState("lol2");
  const test = () => alert(state);
  return (
    <div>
      ExpensesTab
      <div>
        <InputCategory
          onInputChange={onInputChange}
          id={17}
          type={expense}
          remove={test}
          values={values}
          setValues={setValues}
        />
      </div>
    </div>
  );
}
