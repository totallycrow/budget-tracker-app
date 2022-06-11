import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

export default function InputCategory({
  onInputChange,
  expense,
  remove,
  values,
  setValues,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [catName, setCatName] = useState("Category Name");

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <div>
        <input
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          className={
            showMenu === false
              ? "inline mr-20 p-2 my-2 border-2 border-transparent rounded-l"
              : "inline mr-20 p-2 my-2 border-2 rounded-lg"
          }
        ></input>

        <div className={showMenu === false ? "hidden" : "inline"}>
          <button className="inline m-auto px-2">Remove</button>
          <button className="inline m-auto px-2">Add New</button>
        </div>
      </div>
      <div className="flex items-center">
        <ItemList
          onInputChange={onInputChange}
          id={25}
          type={expense}
          label={"Electricity Bills"}
        />{" "}
        <button className={showMenu === false ? "hidden" : "inline mb-4 px-8"}>
          -
        </button>
        <button className={showMenu === false ? "hidden" : "inline mb-4 px-8"}>
          +
        </button>
        <div>{console.log("VALUES", values)}</div>
      </div>
    </div>
  );
}
