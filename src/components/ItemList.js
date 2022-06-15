import React from "react";
import { useEffect, useState } from "react";

const ItemList = ({
  id,
  values,
  setValues,  
  childId,
  childValue,
  childTitle,
}) => {
  const [inputValue, setInputValue] = useState(childValue);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [inputTitle, setInputTitle] = useState(childTitle);
  
  useEffect(() => {
    setInputValue(childValue) 
    setInputTitle(childTitle)   
  }, [values])

  const onClickRemoveItem = () => {
    let data = values.map((input) => {
      if (input.id !== id) {
        
        return input;
      } else {

        input.inputs.forEach((subItem) => {
          if (String(subItem.id) === String(childId)) {
            let removeIndex = input.inputs.findIndex(
              (element) => String(element.id) === String(childId)
            );
            alert(removeIndex);
            input.inputs.splice(removeIndex, 1);
          }
        });
      }
      return input;
    });    
    setValues(data);
  };

  const onClickAddItem = () => {
    const newObject = { id: "", title: "default", value: 0 };

    let updatedData = values.map((input) => {
      if (input.id !== id) {        
        return input;
      } else {
        newObject.id =
          input.inputs.length < 1
            ? input.id + "-" + 0
            : input.id + "-" + (input.inputs.length + 1);
        input.inputs = [...input.inputs, newObject];
      }     
      return input;
    });
    setValues(updatedData);
  };

  useEffect(() => {
    let childNames = values.map((elem) => {
      if (String(elem.id) === String(id)) {
        elem.inputs.forEach((subItem) => {
          if (String(subItem.id) === String(childId)) {
            subItem.title = inputTitle;
          }
        });
      }
      return elem;
    });
    setValues(childNames);
  }, [inputTitle]);

  useEffect(() => {

    let itemListValue = values.map((item) => {     

      if (item.id === id) {       

        item.inputs.forEach((subItem) => { 

          if (String(subItem.id) === String(childId)) {           
            if (inputValue !== "" && inputValue > 0) {
              subItem.value = parseInt(inputValue);
            } else {
              subItem.value = 0;
            }
          }
        });
      }      
      return item;      
    });   
    setValues(itemListValue);
  }, [inputValue]);

  return (
    <div className="mb-4" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <div className="flex">
        <div className="">
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
            onChange={(e) => setInputValue(e.target.value[0] === "0" ? e.target.value.substring(1) : e.target.value)}
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
