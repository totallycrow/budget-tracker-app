import InputCategory from "./InputCategory";

const IncomeTab = ({
  onInputChange,  
  values,
  setValues,
  idGenerator,
}) => {

  const collectionDisplay = values.filter((value) => value.type === "income");
  

  const onClickAddCategory = () => {
    const parentId = idGenerator();

    const newObject = {
      id: parentId,
      type: "income",
      description: "Income",
      value: 0,
      inputs: [{ id: parentId + "-" + 1, title: "Gym", value: 20 }],
    };
    let addedData = [...values, newObject];
    setValues(addedData);
  };

  return (
    <div>

      <div>
        {collectionDisplay.map((value) => (
          <div key={value.id}>
            <InputCategory
              onInputChange={onInputChange}
              id={value.id}
              type={value.type}
              values={values}
              setValues={setValues}
              description={value.description}
              listItems={value.inputs}
              key={value.id}
              onClickAddCategory={onClickAddCategory}
            />
          </div>
        ))}
      </div>
      <div>
        {collectionDisplay.length < 1 ? (
          <button onClick={onClickAddCategory} className="inline m-auto px-2">
            Add New
          </button>
        ) : (
          ""
        )}

     
      </div>
    </div>
  );
};

export default IncomeTab;
