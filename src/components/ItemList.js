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
  childId,
  childValue,
}) => {
  const [inputValue, setInputValue] = useState(childValue);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  let childKey;

  useEffect(() => {
    console.log("ITEMLIST COMPONENT START. ID: ", id);
    console.log("INPUT VALUE: ", inputValue);
    console.log("CHILD VALUE: ", childValue);

    let itemListValue = values.map((item) => {
      console.log("FIRST LOOP / ITEM: ", item);

      if (item.id == id) {
        console.log("FIRST LOOP / ITEM CHECK: ", item);

        item.inputs.forEach((subItem) => {
          // console.log("SUBITEM: ", subItem);
          childKey = subItem.id;

          if (subItem.id == childId) {
            console.log("SUBITEM: ", subItem);
            if (inputValue !== "" && inputValue > 0) {
              subItem.value = parseInt(inputValue);
            } else {
              subItem.value = 0;
            }
          }
        });
      }
      // Default case, return initial object
      return item;
      // Update the state
    });
    console.log("BEFORE SETSTATE / ITEMLISTVALUE: ", itemListValue);
    setValues(itemListValue);
  }, [inputValue]);

  // useEffect(() => {
  //   console.log(id);
  //   console.log(inputValue);
  //   let itemListValue = values.map((item) => {
  //     if (item.id == id) {
  //       console.log("ITEM:", item);
  //       item.inputs.forEach((subItem) => {
  //         console.log("SUBITEM:", subItem);
  //         console.log(subItem.id);
  //         console.log(childId);
  //         if (subItem.id == childId) {
  //           let result = { ...subItem, value: parseInt(inputValue) };
  //           console.log("INPUTVALUE: ", inputValue);
  //           console.log("RESULT: ", result);

  //           return result;
  //         }
  //       });

  //       // check if not empty
  //       if (inputValue === "" || inputValue < 0) {
  //         return { ...item, value: 0 };
  //       } else return { ...item, value: parseInt(inputValue) };
  //     }
  //     return item;
  //   });
  //   console.log("LIST ITEM: ", itemListValue);

  //   setValues(itemListValue);
  // }, [inputValue]);

  return (
    <div className="mb-4" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
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
        <button className={showMenu === false ? "hidden" : "inline px-4"}>
          -
        </button>
        <button className={showMenu === false ? "hidden" : "inline px-4"}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
