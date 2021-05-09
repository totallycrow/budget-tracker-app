import React from "react";
import { useState, useEffect } from "react";

const ItemList = ({ id, onInputChange, type }) => {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    onInputChange(id, inputValue, type);
  }, [inputValue]);

  return (
    <div>
      <h3>Title</h3>
      <div class="flex">
        <div class="text-sm border border-2 rounded-l px-10 py-2 bg-gray-300 whitespace-nowrap">
          <div></div>
        </div>
        <input
          name="field_name"
          class="border border-2 rounded-r px-4 py-2 w-full"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ItemList;
