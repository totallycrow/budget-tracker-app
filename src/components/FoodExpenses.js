import React from 'react'
import ItemList from './ItemList'

const FoodExpenses = ({onInputChange, expense}) => {
    return (
        <div>         
            <ItemList onInputChange={onInputChange} id={11} type={expense} label={'Food Expenses'}/>
            <ItemList onInputChange={onInputChange} id={12} type={expense} label={'Household Expenses'}/>
            <ItemList onInputChange={onInputChange} id={13} type={expense} label={'Other Food Exp.'}/>
            <ItemList onInputChange={onInputChange} id={14} type={expense} label={'Gym Subscription'}/> 
            <ItemList onInputChange={onInputChange} id={23} type={expense} label={'Mobile Phone Bills'}/>
            <ItemList onInputChange={onInputChange} id={15} type={expense} label={'Entertainment Subs.'}/>
            <ItemList onInputChange={onInputChange} id={16} type={expense} label={'Health Insurance'}/>
            <ItemList onInputChange={onInputChange} id={17} type={expense} label={'Other Personal Exp.'}/>
        </div>
    )
}

export default FoodExpenses;
