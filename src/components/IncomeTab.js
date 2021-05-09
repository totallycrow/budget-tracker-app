import React from 'react'
import ItemList from './ItemList'

const IncomeTab = ({onInputChange, income, expense}) => {
    return (
        <div>
             <ItemList
              onInputChange={onInputChange}
              id={1}
              type={income}
              label={"Salary"}
            />
            <ItemList
              onInputChange={onInputChange}
              id={2}
              type={income}
              label={"Other Income"}
            />
            {/* <p>ID 2 value {inputIncomes[1]}</p> */}
            <ItemList onInputChange={onInputChange} id={3} type={expense} />
            <ItemList onInputChange={onInputChange} id={4} type={expense} />
        </div>
    )
}

export default IncomeTab
