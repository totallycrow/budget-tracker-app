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
  childTitle,
}) => {
  const [inputValue, setInputValue] = useState(childValue);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [title, setTitle] = useState("Your Title");
  const [inputTitle, setInputTitle] = useState(childTitle);
  let childKey;

  const onClickRemoveItem = () => {
    let data = values.map((input) => {
      if (input.id !== id) {
        console.log(input);
        return input;
      } else {
        console.log("INPUT: ", input);
        console.log("PROPS INPUT", id);
        console.log("INPUT.ID", input.id);

        input.inputs.forEach((subItem) => {
          if (subItem.id == childId) {
            let removeIndex = input.inputs.findIndex(
              (element) => element.id === childId
            );
            alert(removeIndex);
            input.inputs.splice(removeIndex, 1);
          }
        });
      }
      return input;
    });
    console.log("DATA: ", data);
    setValues(data);
  };

  const onClickAddItem = () => {
    const newObject = { id: "", title: title, value: 0 };

    let updatedData = values.map((input) => {
      if (input.id !== id) {
        console.log(input);
        return input;
      } else {
        newObject.id =
          input.inputs.length < 1
            ? input.id + "-" + 0
            : input.id + "-" + input.inputs.length;
        input.inputs = [...input.inputs, newObject];
      }
      console.log("FINAL ADD INPUT :", input);
      return input;
    });
    setValues(updatedData);
  };

  useEffect(() => {
    let childNames = values.map((elem) => {
      if (elem.id == id) {
        elem.inputs.forEach((subItem) => {
          if (subItem.id == childId) {
            subItem.title = inputTitle;
          }
        });
      }
      return elem;
    });
    setValues(childNames);
  }, [inputTitle]);

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
      <div className="flex">
        <div className="">
          {/* <div className="flex justify-center content-center text-sm border border-2 rounded-l px-20 py-2 bg-gray-300 whitespace-nowrap w-2 "> */}
          {/* <div className="">{description}</div> */}
          <input
            className=" border border-2 rounded-l px-2 py-2 bg-gray-300 whitespace-nowrap w-40"
            type="text"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
        </div>
        <div>
          {" "}
          <input
            name="field_name"
            className="border border-2 rounded-r px-4 py-2"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            onClick={onClickRemoveItem}
            className={showMenu === false ? "hidden" : "inline px-4"}
          >
            -
          </button>
          <button
            onClick={onClickAddItem}
            className={showMenu === false ? "hidden" : "inline px-4"}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
