import React from 'react'
import ItemList from './ItemList'

const SavingsExpenses = ({onInputChange, expense}) => {
    return (
        <div>
            <ItemList onInputChange={onInputChange} id={18} type={expense} label={'Emergency Fund'}/>
            <ItemList onInputChange={onInputChange} id={19} type={expense} label={'Investments'}/>
            <ItemList onInputChange={onInputChange} id={20} type={expense} label={'Savings Accounts'}/>
            <ItemList onInputChange={onInputChange} id={21} type={expense} label={'LISA'}/>
            <ItemList onInputChange={onInputChange} id={22} type={expense} label={'Other Savings'}/>
        </div>
    )
}

export default SavingsExpenses;
