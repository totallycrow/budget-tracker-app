import React from 'react'
import ItemList from './ItemList'

const HousingExpenses = ({onInputChange, expense}) => {
    return (
        <div>
             
            
            {/* <p>ID 2 value {inputIncomes[1]}</p> */}
            <ItemList onInputChange={onInputChange} id={3} type={expense} />
            <ItemList onInputChange={onInputChange} id={4} type={expense} />
        </div>
    )
}

export default HousingExpenses
