import React from "react";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ItemList = ({
  id,
  onInputChange,
  type,
  label,
  values,
  setValues,
  description,
}) => {
  const [inputValue, setInputValue] = useState(0);

  // useEffect(() => {
  //   onInputChange(id, inputValue, type);
  //   // Set LocalStorage key-value pairs
  //   localStorage.setItem(`${label}`, `${inputValue}`);
  // }, [inputValue]);

  useEffect(() => {
    console.log(id);
    console.log(inputValue);
    let itemListValue = values.map((item) => {
      if (item.id == id) {
        // check if not empty
        if (inputValue === "" || inputValue < 0) {
          return { ...item, value: 0 };
        } else return { ...item, value: parseInt(inputValue) };
      }
      return item;
    });
    console.log("LIST ITEM: ", itemListValue);

    setValues(itemListValue);
  }, [inputValue]);

  return (
    <div className="mb-4">
      <h3></h3>
      <div className="flex">
        <div></div>
        <div className="flex justify-center content-center text-sm border border-2 rounded-l px-20 py-2 bg-gray-300 whitespace-nowrap w-2 ">
          <div className="">{description}</div>
        </div>
        <input
          name="field_name"
          className="border border-2 rounded-r px-4 py-2"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ItemList;
