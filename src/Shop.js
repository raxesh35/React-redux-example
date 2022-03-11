import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
  const amount = useSelector(state => state.amount);
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container'>
        <h3>Deposite/Withdraw money</h3>
        {/* <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
        <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}

        <button className="btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
            Updated Balance {amount}
        <button className="btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
