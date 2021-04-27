import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utils/format';

export const Transaction = (props) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const { text, amount, _id } = props.transaction
    const sign = amount > 0 ? '+' : '-'
    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span> <span>{sign}</span>${numberWithCommas(Math.abs(amount))}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
        </li>
    )
}
