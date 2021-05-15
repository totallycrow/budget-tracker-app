import React from 'react'
import ItemList from './ItemList'

const TransportationExpenses = ({onInputChange, expense}) => {
    return (
        <div>
             
            
            {/* <p>ID 2 value {inputIncomes[1]}</p> */}
            <ItemList onInputChange={onInputChange} id={7} type={expense} label={'Tube/Bus Costs'}/>
            <ItemList onInputChange={onInputChange} id={8} type={expense} label={'Car Fuel'}/>
            <ItemList onInputChange={onInputChange} id={9} type={expense} label={'Car Insurance'}/>
            <ItemList onInputChange={onInputChange} id={10} type={expense} label={'Other Transp. Costs'}/>
        </div>
    )
}

export default TransportationExpenses
