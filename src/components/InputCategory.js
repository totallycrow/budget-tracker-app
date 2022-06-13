import React from "react";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

export default function InputCategory({
  onInputChange,
  expense,
  values,
  setValues,
  id,
  description,
  listItems,
  onClickAddCategory,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [catName, setCatName] = useState(description);

  // const toggleMenu = () => setShowMenu(!showMenu);
  console.log("INPUTS PROPS", listItems);

  const onClickRemove = () => {
    let filteredData = values.filter((elem) => elem.id !== id);
    setValues(filteredData);
    setShowMenu(false);
  };

  useEffect(() => {
    let categoryNames = values.map((cat) => {
      if (cat.id == id) {
        cat.description = catName;
      }
      return cat;
    });
    setValues(categoryNames);
  }, [catName]);

  return (
    <div>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
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
          <button onClick={onClickRemove} className="inline m-auto px-2">
            Remove
          </button>
          <button onClick={onClickAddCategory} className="inline m-auto px-2">
            Add New
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          {listItems.map((input) => (
            <ItemList
              onInputChange={onInputChange}
              id={id}
              childId={input.id}
              childValue={input.value}
              type={expense}
              childTitle={input.title}
              values={values}
              setValues={setValues}
              key={input.id}
              parentObject={input}
            />
          ))}
        </div>

        <div></div>
        {/* <ItemList
          onInputChange={onInputChange}
          id={id}
          type={expense}
          description="Electricity Bills"
          values={values}
          setValues={setValues}
        />{" "} */}
        {/* <button className={showMenu === false ? "hidden" : "inline mb-4 px-8"}>
          -
        </button>
        <button className={showMenu === false ? "hidden" : "inline mb-4 px-8"}>
          +
        </button> */}
        <div>{console.log("VALUES", values)}</div>
      </div>
    </div>
  );
}
