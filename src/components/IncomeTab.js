import React from 'react'
import ItemList from './ItemList'

const IncomeTab = ({onInputChange, income}) => {
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
            
        </div>
    )
}

export default IncomeTab
