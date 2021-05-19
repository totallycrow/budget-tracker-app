import React from 'react'
import ItemList from './ItemList'

const HousingExpenses = ({onInputChange, expense}) => {
    return (
        <div>
             
            
            
            <ItemList onInputChange={onInputChange} id={3} type={expense} label={'Rent'}/>
            <ItemList onInputChange={onInputChange} id={4} type={expense} label={'Council Tax'}/>
            <ItemList onInputChange={onInputChange} id={24} type={expense} label={'Water Bills'}/>
            <ItemList onInputChange={onInputChange} id={25} type={expense} label={'Electricity Bills'}/>
            <ItemList onInputChange={onInputChange} id={26} type={expense} label={'Internet'}/>

            <ItemList onInputChange={onInputChange} id={5} type={expense} label={'Mortgage'}/>
            <ItemList onInputChange={onInputChange} id={6} type={expense} label={'Repairs / Maintenance'}/>
            
        </div>
    )
}

export default HousingExpenses
