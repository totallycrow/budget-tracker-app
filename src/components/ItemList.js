import React from "react";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ItemList = ({ id, onInputChange, type, label }) => {
  const [inputValue, setInputValue] = useLocalStorage(label, 0);

  useEffect(() => {
    onInputChange(id, inputValue, type);
    // Set LocalStorage key-value pairs
    localStorage.setItem(`${label}`, `${inputValue}`);
  }, [inputValue]);

  return (
    <div className="mb-4">
      <h3></h3>
      <div className="flex">
        <div></div>
        <div className="flex justify-center content-center text-sm border border-2 rounded-l px-20 py-2 bg-gray-300 whitespace-nowrap w-2 ">
          <div className="">{label}</div>
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
